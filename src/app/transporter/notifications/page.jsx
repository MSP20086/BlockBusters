'use client';
import React from 'react';
import Notifications from 'views/importer/profile/components/Notifications';
import { Box, Grid } from '@chakra-ui/react';

export default function NotificationPage() {
  return (
    <Notifications
      used={25.6}
      total={50}
      gridArea={{
        base: '1 / 1 / 2 / 2',
        lg: '1 / 1 / 2 / 3',
        '2xl': '1 / 1 / 2 / 2',
      }}
      style={{ marginBottom: '20px' }}
    />
  );
}
