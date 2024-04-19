import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import { MdUpload } from 'react-icons/md';
import Dropzone from 'views/importer/profile/components/Dropzone';
import { useState, useRef } from 'react';

export default function Upload(props) {
  const { documentName, uploadStatus, ...rest } = props;

  const [cid, setCid] = useState('');
  const inputFile = useRef(null);

  const handleChange = (e) => {
    const fileToUpload = e.target.files[0];
    if (fileToUpload) {
      uploadFile(fileToUpload);
    }
  };

  const uploadFile = async (fileToUpload) => {
    try {
      const data = new FormData();
      data.append('file', fileToUpload);
      const res = await fetch('/api/files', {
        method: 'POST',
        body: data,
      });
      const resData = await res.json();
      setCid(resData.IpfsHash);
    } catch (error) {
      console.error(error);
      alert('Trouble uploading file');
    }
  };

  const handleViewDocument = () => {
    // Assuming you have the URL of the PDF file stored somewhere, replace 'pdfUrl' with the actual URL
    const pdfUrl = `https://sapphire-decisive-termite-106.mypinata.cloud/ipfs/${cid}`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${documentName}.pdf`; // Set the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const brandColor = useColorModeValue('brand.500', 'white');

  return (
    <Card {...rest} alignItems="center" p="20px">
      <Flex direction={{ base: 'column', '2xl': 'row' }} align="center">
        <Dropzone
          w={{ base: '100%', '2xl': '268px' }}
          me={{ base: '0', '2xl': '36px' }}
          maxH="100%"
          minH="50%"
          content={
            <Box textAlign="center">
              <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
              <Text fontSize="xl" fontWeight="700" color={brandColor} mt="12px">
                Upload Files
              </Text>
              <Text fontSize="sm" fontWeight="500" color="gray.500" mt="8px">
                PDF files are allowed
              </Text>
            </Box>
          }
        />
        <Flex direction="column" pl={{ base: '0', '2xl': '44px' }}>
          <Text
            color="secondaryGray.900"
            fontWeight="bold"
            textAlign="start"
            fontSize={{ base: 'lg', '2xl': '2xl' }}
            mt={{ base: '20px', '2xl': '0' }}
          >
            {documentName}
          </Text>
          <Flex direction="column" mt="20px" w={{ base: '100%', '2xl': 'auto' }}>
            <input
              type="file"
              id="file"
              ref={inputFile}
              onChange={handleChange}
              style={{ display: 'none' }}
              disabled={uploadStatus}
            />
            <Button
              as="span"
              variant="brand"
              fontWeight="500"
              mb="8px"
              isDisabled={uploadStatus}
              onClick={handleViewDocument}
            >
              View Document
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
