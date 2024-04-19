'use client';

// Chakra imports
import { Box, Button, Grid } from '@chakra-ui/react';
import React from 'react';

// Custom components
import Banner from 'views/importer/profile/components/Banner';
import Upload from 'views/importer/profile/components/Upload';

// Assets
import banner from 'img/auth/banner.png';
import avatar from 'img/avatars/avatar4.png';
import { useSession } from 'next-auth/react';

export default function ProfileOverview() {
  const { data: session } = useSession();


  const [details, setdetails] = React.useState({
    image: '',
    role: '',
    country: '',
    company: '',
    goodsType: '',
    cid: ''
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

  const handleViewDocument = () => {
    const pdfUrl = `https://sapphire-decisive-termite-106.mypinata.cloud/ipfs/${details.cid}`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `License.pdf`; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
          TypeofBusiness="Import"
        />
      </Grid>
      <Grid>
        <Button marginLeft='auto' marginRight='auto' onClick={handleViewDocument} colorScheme='green'>
          View License
        </Button>
        
      </Grid>
    </Box>
  );
}
