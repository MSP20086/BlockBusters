'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';


import ComplexTable from 'views/customs/orders/components/ComplexTable';

import React from 'react';
import ongoingOrders from 'views/customs/orders/variables/CurrentOrders';
import pastOrders from 'views/customs/orders/variables/RecentOrders';


export default function DataTables() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid mb="20px" spacing={{ base: '20px', xl: '20px' }}>
        <ComplexTable tableData={ongoingOrders} id = {'Exporter'}/>
        <ComplexTable tableData={pastOrders} id = {'Exporter'}/>
      </SimpleGrid>
    </Box>
  );
}