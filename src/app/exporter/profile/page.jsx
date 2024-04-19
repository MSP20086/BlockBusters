'use client';

// Chakra imports
import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
// Custom components
import Banner from 'views/importer/profile/components/Banner';
import Upload from 'views/importer/profile/components/Upload';
import { useSession } from 'next-auth/react';

// Assets
import banner from 'img/auth/banner.png';

export default function ProfileOverview() {
  const { data: session } = useSession();


  const [details, setdetails] = React.useState({
    image: '',
    role: '',
    country: '',
    company: '',
    goodsType: ''
  })
  const id = session?.user.id;
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/user/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const userData = await response.json();
        setdetails(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
  }, [id]);

  console.log(details);
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
          avatar={details.image}
          name={details.company}
          job={details.role}
          location={details.country}
          TypeofGood={details.goodsType}
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
