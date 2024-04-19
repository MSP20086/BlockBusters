'use client'
import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SignIn() {
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const brandStars = useColorModeValue('brand.500', 'brand.400');

  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [items, setItems] = useState([{name: '', quantity: '', price: '' }]);
  const [exporterName, setExporterName] = useState('');
  const [importerName, setImporterName] = useState('');
  const [transporterName, setTransporterName] = useState('');
  const [exporterCountry, setExporterCountry] = useState('');
  const [importerCountry, setImporterCountry] = useState('');
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);

  const handleItemChange = (index, key, value) => {
    const itemsCopy = [...items];
    itemsCopy[index][key] = value;
    setItems(itemsCopy);
  };

  const handleAddItem = () => {
    setItems([...items, {name: '', quantity: '', price: '' }]);
  };

  const handleRemoveItem = (index) => {
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  const handleGenerateInvoice = () => {
    // Generate invoice logic goes here
    setInvoiceGenerated(true);
  };

  const handleSubmit = async () => {
    // Handle form submission here
  };

  return (
    <Box pt={{ base: '200px', md: '80px', xl: '80px' }} marginRight='auto'>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '10px', md: '4vh' }}
      >
        <Box mb="30px">
          <Heading color={textColor} fontSize="36px" mb="6px">
            Details
          </Heading>
          <Text
            mb="20px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your specific details
          </Text>
        </Box>
        <FormControl w="100%" maxW="420px">
          <FormLabel color={textColor} fontWeight="500">
            Product ID
          </FormLabel>
          <Input
            type="text"
            placeholder="Product ID"
            mb="12px"
            size="lg"
            variant="auth"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <FormLabel color={textColor} fontWeight="500">
            Product Name
          </FormLabel>
          <Input
            type="text"
            placeholder="Product Name"
            mb="12px"
            size="lg"
            variant="auth"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <FormLabel color={textColor} fontWeight="500">
            Item Details
          </FormLabel>
          {items.map((item, index) => (
            <Flex key={index} mb="12px">
            <InputGroup size="md" mr="12px">
                <Input
                  type="text"
                  placeholder="Name"
                  variant="auth"
                  value={item.name}
                  onChange={(e) =>
                    handleItemChange(index, 'name', e.target.value)
                  }
                />
                {/* <InputRightElement>
                  <Text color={textColor}>Qty</Text>
                </InputRightElement> */}
              </InputGroup>
              <InputGroup size="md" mr="12px">
                <Input
                  type="number"
                  placeholder="Quantity"
                  variant="auth"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, 'quantity', e.target.value)
                  }
                />
                <InputRightElement>
                  <Text color={textColor}>Qty</Text>
                </InputRightElement>
              </InputGroup>
              <InputGroup size="md" ml="12px">
                <Input
                  type="number"
                  placeholder="Price"
                  variant="auth"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(index, 'price', e.target.value)
                  }
                />
                <InputRightElement>
                  <Text color={textColor}>Price</Text>
                </InputRightElement>
              </InputGroup>
              <Button
                ml="12px"
                colorScheme="red"
                size="sm"
                onClick={() => handleRemoveItem(index)}
              >
                -
              </Button>
            </Flex>
          ))}
          <Button mb="12px" size="sm" onClick={handleAddItem}>
            Add Item
          </Button>
          <Flex direction="row" justifyContent="space-between" mb="12px">
            <FormControl w="48%">
              <FormLabel color={textColor} fontWeight="500">
                Exporter Name
              </FormLabel>
              <Input
                type="text"
                placeholder="Exporter Name"
                size="lg"
                variant="auth"
                value={exporterName}
                onChange={(e) => setExporterName(e.target.value)}
              />
            </FormControl>
            <FormControl w="48%">
              <FormLabel color={textColor} fontWeight="500">
                Importer Name
              </FormLabel>
              <Input
                type="text"
                placeholder="Importer Name"
                size="lg"
                variant="auth"
                value={importerName}
                onChange={(e) => setImporterName(e.target.value)}
              />
            </FormControl>
          </Flex>
          <Flex direction="row" justifyContent="space-between" mb="12px">
            <FormControl w="48%">
              <FormLabel color={textColor} fontWeight="500">
                Transporter Name
              </FormLabel>
              <Input
                type="text"
                placeholder="Transporter Name"
                size="lg"
                variant="auth"
                value={transporterName}
                onChange={(e) => setTransporterName(e.target.value)}
              />
            </FormControl>
            <FormControl w="48%">
              <FormLabel color={textColor} fontWeight="500">
                Exporter Country
              </FormLabel>
              <Input
                type="text"
                placeholder="Exporter Country"
                size="lg"
                variant="auth"
                value={exporterCountry}
                onChange={(e) => setExporterCountry(e.target.value)}
              />
            </FormControl>
          </Flex>
          <Flex direction="row" justifyContent="space-between" mb="12px">
            <FormControl w="48%">
              <FormLabel color={textColor} fontWeight="500">
                Importer Country
              </FormLabel>
              <Input
                type="text"
                placeholder="Importer Country"
                size="lg"
                variant="auth"
                value={importerCountry}
                onChange={(e) => setImporterCountry(e.target.value)}
              />
            </FormControl>
            <Button
              ml="12px"
              colorScheme="blue"
              size="md"
              onClick={handleGenerateInvoice}
            >
              Generate Invoice
            </Button>
          </Flex>
          {invoiceGenerated && (
            <Text mb="12px" color="green.500">
              Invoice generated successfully!
            </Text>
          )}
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="36px"
            // Add your validation condition here
            onClick={handleSubmit}
          >
            Done
          </Button>
        </FormControl>
      </Flex>
    </Box>
  );
}
