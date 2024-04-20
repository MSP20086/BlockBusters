require('@nomicfoundation/hardhat-toolbox')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.24',
  defaultNetwork: 'hardhat',
  networks: {
    sepolia: {
      url: 'https://1rpc.io/sepolia',
      chainId: 11155111,
      accounts: [
        '0x7880ffe39162a87f2352b629ed01d3bf9c76754a847d481ddac180d6e73368e4',
      ],
    },
    hardhat: {
      chainId: 1337,
      accounts: {},
    },
  },
  etherscan: {
    apiKey: 'UYP5N68UZF24BJSSKSUY8JHJ16PI8P5QQ4',
  },
}
