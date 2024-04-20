// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {

    function time() public view returns (uint){
        return block.timestamp;
    }

    struct TransactionRequest {
        uint penaltyAmount;
        uint rewardAmount;
        uint dueDate;
        uint status;
    }

    mapping(address => mapping(address => TransactionRequest)) public transactionRequests;
    mapping(address => address[]) public exporterRequests;
    mapping(address => mapping(address => TransactionRequest)) public expToTrans;

    event TransactionInitiated(address indexed importer, address indexed exporter, uint penaltyAmount, uint rewardAmount, uint dueDate);

    function initiateTransaction(address _exporter, uint _penaltyAmount, uint _rewardAmount, uint _dueDate) external payable {
        require(_exporter != msg.sender, "Exporter and Importer addresses cannot be the same");
        require(_dueDate > block.timestamp, "Due date must be in the future");

        transactionRequests[msg.sender][_exporter] = TransactionRequest({
            penaltyAmount: _penaltyAmount,
            rewardAmount: _rewardAmount,
            dueDate: _dueDate,
            status: 1
        });

        exporterRequests[_exporter].push(msg.sender);

        emit TransactionInitiated(msg.sender, _exporter, _penaltyAmount, _rewardAmount, _dueDate);

        require(msg.value >= _rewardAmount, "Insufficient reward amount provided");
        payable(address(this)).transfer(_rewardAmount);
    }

    function acceptRequest(address _importer) external payable {
        bool importerFound = false;
        address[] storage importers = exporterRequests[msg.sender];
        for(uint i = 0; i < importers.length; i++) {
            if(importers[i] == _importer) {
                importerFound = true;
                break;
            }
        }
        require(importerFound, "Importer not found in exporter's list");

        TransactionRequest storage request = transactionRequests[_importer][msg.sender];

        require(request.status == 1, "Transaction is already either accepted/rejected");

        require(msg.value >= request.penaltyAmount, "Insufficient penalty amount provided");
        request.status = 2;

        payable(address(this)).transfer(request.penaltyAmount);
    }

    function requestReject(address _importer) external payable {
        bool importerFound = false;
        address[] storage importers = exporterRequests[msg.sender];
        for(uint i = 0; i < importers.length; i++) {
            if(importers[i] == _importer) {
                importerFound = true;
                break;
            }
        }
        require(importerFound, "Importer not found in exporter's list");

        TransactionRequest storage request = transactionRequests[_importer][msg.sender];

        require(request.status == 1, "Transaction is already either accepted or rejected");

        payable(_importer).transfer(msg.value);
    }

    function createRequestExpToTrans(address _transporter, uint _penaltyAmount, uint _rewardAmount, uint _dueDate) external payable {
        require(_transporter != msg.sender, "Exporter and Transporter addresses cannot be the same");
        require(_dueDate > block.timestamp, "Due date must be in the future");

        expToTrans[msg.sender][_transporter] = TransactionRequest({
            penaltyAmount: _penaltyAmount,
            rewardAmount: _rewardAmount,
            dueDate: _dueDate,
            status: 1
        });

        require(msg.value >= _rewardAmount, "Insufficient reward amount provided");
        payable(address(this)).transfer(_rewardAmount);
    }

    function acceptRequestExpToTrans(address _exporter) external payable {
        bool exporterFound = false;
        address[] storage exporters = exporterRequests[msg.sender];
        for(uint i = 0; i < exporters.length; i++) {
            if(exporters[i] == _exporter) {
                exporterFound = true;
                break;
            }
        }
        require(exporterFound, "Exporter not found in transporter's list");

        TransactionRequest storage request = expToTrans[_exporter][msg.sender];

        require(request.status == 1, "Transaction is already either accepted/rejected");

        require(msg.value >= request.penaltyAmount, "Insufficient penalty amount provided");
        request.status = 2;

        payable(address(this)).transfer(request.penaltyAmount);
    }

    function rejectRequestExpToTrans(address _exporter) external payable {
        bool exporterFound = false;
        address[] storage exporters = exporterRequests[msg.sender];
        for(uint i = 0; i < exporters.length; i++) {
            if(exporters[i] == _exporter) {
                exporterFound = true;
                break;
            }
        }
        require(exporterFound, "Exporter not found in transporter's list");

        TransactionRequest storage request = expToTrans[_exporter][msg.sender];

        require(request.status == 1, "Transaction is already either accepted or rejected");

        payable(_exporter).transfer(msg.value);
    }

    event ComplaintRaised(address indexed importer, address indexed exporter, uint totalAmount);

    function raiseComplaint(address _exporter) external {
    
        TransactionRequest storage request = transactionRequests[msg.sender][_exporter];
        require(request.status == 2, "Exporter must have accepted the request");
        require(block.timestamp > request.dueDate, "Due date must have passed");

        
        uint totalAmount = request.penaltyAmount + request.rewardAmount;
        payable(msg.sender).transfer(totalAmount);

        
        delete transactionRequests[msg.sender][_exporter];

        
        emit ComplaintRaised(msg.sender, _exporter, totalAmount);
    }

    event ComplaintRaisedExpToTrans(address indexed exporter, address indexed transporter, uint totalAmount);

    function raiseComplaintExpToTrans(address _transporter) external {

        TransactionRequest storage request = expToTrans[msg.sender][_transporter];
        require(request.status == 2, "Transporter must have accepted the request");
        require(block.timestamp > request.dueDate, "Due date must have passed");


        uint totalAmount = request.penaltyAmount + request.rewardAmount;
        payable(msg.sender).transfer(totalAmount);


        delete expToTrans[msg.sender][_transporter];

        
        emit ComplaintRaisedExpToTrans(msg.sender, _transporter, totalAmount);
    }

}