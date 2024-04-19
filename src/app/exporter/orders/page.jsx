'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';

import ComplexTable from 'views/exporter/orders/components/ComplexTable';

import React from 'react';
import ongoingOrders from 'views/exporter/orders/variables/ongoingOrders';
import pastOrders from 'views/exporter/orders/variables/pastOrders';
import { useRouter } from 'next/navigation';
import { Button } from '@chakra-ui/react';

export default function DataTables() {
  const router = useRouter();
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid mb="20px" spacing={{ base: '20px', xl: '20px' }}>
      <Box marginLeft='auto' marginRight='5%' onClick={() => router.push('/exporter/newOrder')}> 
        <Button
          me="100%"
          minW="20%"
          mt={{ base: '20px', '2xl': 'auto' }}
          variant="brand"
          fontWeight="500"
        >
          Add New +
        </Button>
      </Box>
        <ComplexTable tableData={ongoingOrders} />
        <ComplexTable tableData={pastOrders} />
      </SimpleGrid>
    </Box>
  );
}
