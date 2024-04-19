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

// Custom components
import { HSeparator } from 'components/separator/Separator';
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcDepartment } from "react-icons/fc";

export default function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const { data: session} = useSession();

  const [country, setcountry] = useState('');
  const [company, setcomapany] = useState('');
  const [goodsType, setgoods] = useState('');
  const router = useRouter();


  const roles = ["Exporter", "Importer", "Customs", "Transporter"];

  const [selectedRole, setSelectedRole] = useState(""); 

  const [licenseFile, setLicenseFile] = useState(null);
  const [term, setterm] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setLicenseFile(file);
  };

  const handleterms = () => {
    const check = !term;
    setterm(check);
  }

  const handleSubmit = async () => {
    try {
    
      const formData = {
        id: session?.user.id,
        role: selectedRole,
        country: country,
        company: company,
        goodsType: goodsType,
      };
  
      const response = await fetch('/api/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
        router.push(`/${selectedRole.toLowerCase()}/default`);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  
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
        mb={{ base: '10px', md: '14px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '10px', md: '4vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="6px">
            Details
          </Heading>
          <Text
            mb="20px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your specific details
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
          mb={{ base: '6px', md: 'auto' }}
        >
          <FormControl>
          <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="2px"
            >
              Role<Text color={brandStars}>*</Text>
            </FormLabel>

            <Select
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: '0px', md: '0px' }}
              placeholder="Select Role"
              mb="12px"
              fontWeight="500"
              size="lg"
              value={selectedRole} 
              onChange={(e) => setSelectedRole(e.target.value)} 
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </Select>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
              mb="2px"
            >
              Company/Department<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Name"
                mb="12px"
                size="lg"
                type={'text'}
                variant="auth"
                value={company}
                onChange={(e) => setcomapany(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={FcDepartment}
                />
              </InputRightElement>
            </InputGroup>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
              mb='2px'
            >
              Type of Goods
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={false}
                fontSize="sm"
                placeholder="Name"
                mb="12px"
                size="lg"
                type={'text'}
                variant="auth"
                value={goodsType}
                name='goods'
                onChange={(e) => setgoods(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={FcDepartment}
                />
              </InputRightElement>
            </InputGroup>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
              mb='2px'
            >
              Country<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Name"
                mb="12px"
                size="lg"
                type={'text'}
                variant="auth"
                value={country}
                name='country'
                onChange={(e) => setcountry(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={FcDepartment}
                />
              </InputRightElement>
            </InputGroup>
            <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
                mb='2px'
            >
            License
            <Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange} // Call handleFileChange function when a file is selected
                mb="12px"
                size="lg"
                variant="auth"
            />
            <FormControl display="flex" alignItems="center" mb='4px'>
                <Checkbox
                  id="remember-login"
                  colorScheme="brandScheme"
                  me="10px"
                  onClick={handleterms}
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Accept Terms & Conditions
                </FormLabel>
            </FormControl>
            {/* <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
                <Checkbox
                  id="remember-login"
                  colorScheme="brandScheme"
                  me="10px"
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <Link href="/auth/forgot-password">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Forgot password?
                </Text>
              </Link>
            </Flex> */}
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="36px"
              mb="24px"
              disabled={term}
              onClick={handleSubmit}
            >
              Done
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </DefaultAuthLayout>
  );
}
