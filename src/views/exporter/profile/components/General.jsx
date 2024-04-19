// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Information from 'views/importer/profile/components/Information';

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset',
  );
  return (
    <Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
      <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mb="4px">
        General Information
      </Text>
      <SimpleGrid columns={2} gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Location"
          value="San Francisco, CA"
        />
        <Information
          boxShadow={cardShadow}
          title="Type of Goods"
          value="Electronics"
        />
        <Information
          boxShadow={cardShadow}
          title="Type of Business"
          value="Import"
        />
      </SimpleGrid>
    </Card>
  );
}
