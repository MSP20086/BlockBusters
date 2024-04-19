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
import { useState, useRef } from "react"

export default function Upload(props) {
  const { used, total, documentName, uploadStatus, ...rest } = props;

  const [file, setFile] = useState("")
  const [cid, setCid] = useState("")
  const [uploading, setUploading] = useState(false)

  const inputFile = useRef(null)

  const uploadFile = async fileToUpload => {
    try {
      setUploading(true)
      const data = new FormData()
      data.set("file", fileToUpload)
      const res = await fetch("/api/files", {
        method: "POST",
        body: data
      })
      const resData = await res.json()
      setCid(resData.IpfsHash)
      setUploading(false)
    } catch (e) {
      console.log(e)
      setUploading(false)
      alert("Trouble uploading file")
    }
  }
  const handleChange = e => {
    setFile(e.target.files[0])
    uploadFile(e.target.files[0])
  }
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
                PDF files are allowed
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
            <input type="file" id="file" ref={inputFile} onChange={handleChange} isDisabled={uploadStatus} />
            <Button
              me="100%"
              minW="117%"
              mt={{ base: '20px', '2xl': 'auto' }}
              variant="brand"
              fontWeight="500"
              isDisabled={uploadStatus}
            >
              Upload Document
            </Button>
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