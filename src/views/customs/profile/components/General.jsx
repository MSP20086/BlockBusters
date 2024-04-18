// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Information from 'views/customs/profile/components/Information';

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset',
  );
  return (
    <Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
      The Central Board of Excise and Customs (CBEC) is a part of the Department of Revenue under the Ministry of Finance. It deals with the tasks of formulation of policy concerning levy and collection of customs and central excise duties and prevention of smuggling. Users can get details related to customs acts, rules, regulations, tariff, central excise, Narcotics Control Bureau, service tax, etc. Online services for e-filing of shipping bill and central excise and service tax, SMS query, import/export code, etc. are available.
      </Text>
      <SimpleGrid columns={2} gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Customs Regulations"
          value="Import/export rules and regulations"
        />
        <Information
          boxShadow={cardShadow}
          title="Enforcement"
          value="Prevention of smuggling and illegal activities"
        />
        <Information
          boxShadow={cardShadow}
          title="Organization"
          value="Customs and Central Excise"
        />
        <Information
          boxShadow={cardShadow}
          title="More Information"
          value={<a href="https://www.cbic.gov.in/entities/customs" target="_blank" rel="noopener noreferrer">Visit CBIC Customs</a>}
        />
      </SimpleGrid>

    </Card>
  );
}
