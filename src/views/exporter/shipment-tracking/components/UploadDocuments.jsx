// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { MdUpload } from 'react-icons/md';
import Dropzone from 'views/importer/profile/components/Dropzone';
import { ThirdWebStorage } from '@thirdweb-dev/storage'
import { useStorageUpload } from '@thirdweb-dev/react'
import fs from 'fs'
import { useState } from 'react'

const storage = new ThirdWebStorage()


export default function Upload(props) {
  const { used, total, documentName, uploadStatus, ...rest } = props;

  const [file, setFile] = useState(null)

  const { upload } = useStorageUpload();

  const uploadToIPFS = async () => {
    const uploadUrl = await upload({
      data: [file],
      options: {
        uploadWithGatewayUrl: true,
        uploadWithoutDirectory: true
      }
    })
    console.log('Upload URL:', uploadUrl);
  }

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const textColorSecondary = 'gray.400';
  return (
    <Card {...rest} alignItems="center" p="20px">
      <Flex h="100%" direction={{ base: 'column', '2xl': 'row' }}>
        <Dropzone
          w={{ base: '100%', '2xl': '268px' }}
          me="36px"
          maxH={{ base: '70%', lg: '50%', '2xl': '100%' }}
          minH={{ base: '70%', lg: '50%', '2xl': '100%' }}
          content={
            <Box>
              <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
              <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="xl" fontWeight="700" color={brandColor}>
                  Upload Files
                </Text>
              </Flex>
              <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
                PNG, JPG and GIF files are allowed
              </Text>
            </Box>
          }
        />
        <Flex direction="column" pe="44px">
          <Text
            color={textColorPrimary}
            fontWeight="bold"
            textAlign="start"
            fontSize="2xl"
            mt={{ base: '20px', '2xl': '50px' }}
          >
            {documentName}
          </Text>

          <Flex flexDirection="column">
            <input type="file" onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0])
              }
            }}></input>
            <Button
              me="100%"
              minW="117%"
              mt={{ base: '20px', '2xl': 'auto' }}
              variant="brand"
              fontWeight="500"
              isDisabled={uploadStatus}
              onClick={uploadToIPFS}
            >
              Upload Document
            </Button>
            <Button
              me="100%"
              minW="117%"
              mt={{ base: '20px', '2xl': 'auto' }}
              variant="brand"
              fontWeight="500"
              isDisabled={!uploadStatus}
            >
              View Document
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
