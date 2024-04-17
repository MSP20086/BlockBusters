import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/card/Card';

export default function Banner(props) {
  const {
    banner,
    avatar,
    name,
    job,
    location,
    TypeofGood,
    TypeofBusiness,
    posts,
    followers,
    following,
    ...rest
  } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const borderColor = useColorModeValue(
    'white !important',
    '#111C44 !important',
  );
  return (
    <Card mb={{ base: '0px', lg: '20px' }} alignItems="center" {...rest}>
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="50px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar.src}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {job}
      </Text>
      <Flex w="max-content" mx="auto" mt="26px">
        <Flex mx="auto" me="60px" alignItems="center" flexDirection="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="400">
            Location
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            {location}
          </Text>
        </Flex>
        <Flex mx="auto" me="60px" alignItems="center" flexDirection="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="400">
            Type of Good
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            {TypeofGood}
          </Text>
        </Flex>
        <Flex mx="auto" alignItems="center" flexDirection="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="400">
            Business
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            {TypeofBusiness}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
