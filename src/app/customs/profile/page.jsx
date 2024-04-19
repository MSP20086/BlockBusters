'use client';


// Chakra imports
import { Box, Grid } from '@chakra-ui/react';
import AdminLayout from 'layouts/admin';

// Custom components
import Banner from 'views/customs/profile/components/Banner';
import General from 'views/customs/profile/components/General';
import Notifications from 'views/customs/profile/components/Notifications';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

// Assets
import banner from 'img/auth/banner.png';
import avatar from 'img/avatars/avatarSimmmple.png';

export default function ProfileOverview() {
  const { data: session } = useSession();


  const [details, setdetails] = useState({
    image: '',
    role: '',
    country: '',
    company: '',
    goodsType: ''
  })
  const id = session?.user.id;
  useEffect(() => {
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
  return (
    <Box pt={{ base: '110px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Banner
        gridArea="1 / 1 / 2 / 2"
        banner={banner}
        avatar={avatar}
        name={details.company}
        job={details.role}
        location={details.country}
        Contact={`${details.company}@gov.${details.country.slice(0, 2).toLowerCase()}`}
        following="274"
      />
      {/* <Grid
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
        
        <Storage
          gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }}
          used={25.6}
          total={50}
        />
        <Upload
          gridArea={{
            base: '3 / 1 / 4 / 2',
            lg: '1 / 3 / 2 / 4',
          }}
          minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
          pe="20px"
          pb={{ base: '100px', lg: '20px' }}
        />
      </Grid> */}
      <Grid
        mb="20px"
        templateColumns={{
          base: '1fr',
          lg: 'repeat(1, 1fr)',
          '2xl': '1.34fr 1.62fr 1fr',
        }}
        templateRows={{
          base: '1fr',
          lg: 'repeat(2, 1fr)',
          'xl': '1fr',
        }}
        gap={{ base: '20px', xl: '20px' }}
      >
        {/* <Projects
          banner={banner}
          avatar={avatar}
          name="Adela Parkson"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        /> */}
        <General
          gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }}
          minH="365px"
          pe="20px"
        />
        <Notifications
          used={25.6}
          total={50}
          gridArea={{
            base: '3 / 1 / 4 / 2',
            lg: '2 / 1 / 3 / 3',
            '2xl': '1 / 3 / 2 / 4',
          }}
        />
      </Grid>
    </Box>
  );
}
