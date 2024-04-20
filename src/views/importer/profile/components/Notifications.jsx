// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
// Custom components
import SwitchField from 'components/fields/SwitchField';
import Menu from 'components/menu/MainMenu';

export default function Notifications(props) {
  const { ...rest } = props; // Assuming you pass the product data as a prop

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');

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
    <Card mb="20px" {...rest}>
      <Flex align="center" w="100%" justify="space-between" mb="30px">
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="2xl"
          mb="4px"
        >
          Notifications
        </Text>
        <Menu />
      </Flex>
      {products.map((product, index) => (
        <Flex key={index} direction="column" mb="20px">
          <Text fontSize="lg" fontWeight="bold" mb="4px">
            {product.name}
          </Text>
          <Text fontSize="sm" mb="2px">
            ID: {product.id}
          </Text>
          <Text fontSize="sm" mb="2px">
            Quantity: {product.quantity}
          </Text>
          <Text fontSize="sm" mb="2px">
            Total Price: {product.totalPrice}
          </Text>
          <Text fontSize="sm" mb="2px">
            Importer ID: {product.importerId}
          </Text>
          <Text fontSize="sm" mb="2px">
            Country of Importer: {product.countryOfImporter}
          </Text>
          <Text fontSize="sm" mb="2px">
            Date of Shipment: {product.dateOfShipment}
          </Text>
          <Text fontSize="sm" mb="2px">
            Status: {product.status}
          </Text>
        </Flex>
      ))}
    </Card>
  );
}

