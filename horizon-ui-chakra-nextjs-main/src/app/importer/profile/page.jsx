'use client';

// Chakra imports
import { Box, Grid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/profile/components/Banner';
import Upload from 'views/admin/profile/components/Upload';

// Assets
import banner from 'img/auth/banner.png';
import avatar from 'img/avatars/avatar4.png';

export default function ProfileOverview() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: '1fr',
          lg: '1.34fr 1fr 1.62fr',
        }}
        templateRows={{
          base: 'repeat(3, 1fr)',
          lg: '1fr',
        }}
        gap={{ base: '20px', xl: '20px' }}
      >
        <Banner
          gridArea="1 / 1 / 4/ 4"
          banner={banner}
          avatar={avatar}
          name="Alcohol Soft"
          job="Manufacturer"
          location="San Francisco, CA"
          TypeofGood="Video Games"
          TypeofBusiness="Export"
        />
      </Grid>
      <Grid>
        <Upload
          gridArea={{
            base: '3 / 1 / 4 / 2',
            lg: '1 / 1 / 2 / 2',
          }}
          minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
          pe="20px"
          pb={{ base: '100px', lg: '20px' }}
        />
      </Grid>
    </Box>
  );
}
