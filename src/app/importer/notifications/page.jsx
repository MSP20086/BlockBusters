import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function NotificationCard({ product }) {
  return (
    <Box
      border="1px solid #ccc"
      padding="20px"
      marginBottom="4px"
      borderRadius="10px"
      backgroundColor="white"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" // Add box shadow
      marginTop="20px" // Adjust this value according to the height of your navbar
      color="black" // Set text color to black
    >
      <Flex direction="column">
        <Text fontSize="xl" fontWeight="bold">{product.name}</Text>
        <Flex>
          <Text flex="2">ID: {product.id}</Text>
          <Text flex="1">Quantity: {product.quantity}</Text>
          <Text flex="1">Total Price: {product.totalPrice}</Text>
        </Flex>
        <Flex>
          <Text flex="1">Importer ID: {product.importerId}</Text>
          <Text flex="2">Country of Importer: {product.countryOfImporter}</Text>
        </Flex>
        <Flex>
          <Text flex="1">Date of Shipment: {product.dateOfShipment}</Text>
          <Text flex="1">Status: {product.status}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default function NotificationPage() {
  const products = [
    {
      name: 'Product 1',
      id: '1',
      quantity: 5,
      totalPrice: 100,
      importerId: '1',
      countryOfImporter: 'Nigeria',
      dateOfShipment: '2021-09-01',
      status: 'Pending',
    },
    {
      name: 'Product 2',
      id: '2',
      quantity: 10,
      totalPrice: 200,
      importerId: '2',
      countryOfImporter: 'Ghana',
      dateOfShipment: '2021-09-01',
      status: 'Pending',
    },
    {
      name: 'Product 3',
      id: '3',
      quantity: 15,
      totalPrice: 300,
      importerId: '3',
      countryOfImporter: 'Kenya',
      dateOfShipment: '2021-09-01',
      status: 'Pending',
    }
  ];

  return (
    <Box marginTop='72px'>
      {products.map((product, index) => (
        <NotificationCard key={index} product={product} />
      ))}
    </Box>
  );
}
