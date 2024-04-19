'use client';
import React from 'react';
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Select
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react';

import DefaultAuthLayout from 'layouts/auth/Default';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' },
  );
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' },
  );

  const router = useRouter();
  const handleSignIn = async () => {
    const result = await signIn('google', { redirect: false }); 

    if (result?.error) {
      console.error("Failed to sign in with Google:", result.error);
    } else {
      router.push('/auth/details'); 
    }
  };

  const [providers, setproviders] = useState(null);
  
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setproviders(response);
    }
    setProviders();
  },[]);

  
  return (
    <DefaultAuthLayout illustrationBackground={'/img/auth/auth.png'}>
      <Flex
        maxW={{ base: '100%', md: 'max-content' }}
        w="100%"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: '30px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', md: '14vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign Up
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your email and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
        >
          {providers && Object.values(providers).map((provider) => (
            <Button
              key={provider.name}
              onClick={handleSignIn}
              fontSize="sm"
              me="0px"
              mb="26px"
              py="15px"
              h="50px"
              borderRadius="16px"
              bgColor={googleBg}
              color={googleText}
              fontWeight="500"
              _hover={googleHover}
              _active={googleActive }
              _focus={googleActive}
            >
              <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
              Sign in with Google
            </Button>
          ))}
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Link href="/auth/sign-in">
              <Text color={textColorDetails} fontWeight="400" fontSize="14px">
                Already registered?
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Login
                </Text>
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuthLayout>
  );
}
