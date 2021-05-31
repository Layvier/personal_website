import { Box, Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Layout } from '../components/layout';
import { Section } from '../components/sections/Section';
import { SkillsSection } from '../components/sections/SkillsSection';
import { Seo } from '../components/seo';
import { fonts, theme } from '../theme';

enum SectionIds {
  'section1' = 'section1',
  'section2' = 'section2',
  'section3' = 'section3',
}
const IndexPage = () => {
  const [activeSection, setActiveSection] = React.useState<SectionIds>(SectionIds.section1);
  return (
    <Layout>
      <Seo title="Home" />

      <Flex alignItems="stretch" direction="column" position="relative">
        <Flex
          position="fixed"
          top={2}
          right={2}
          pt={2}
          pl={2}
          pr={3}
          pb={2}
          color={[SectionIds.section3].includes(activeSection) ? 'gray.150' : 'gray.850'}
          transition="color 200ms"
          minW="96px"
        >
          <Stack spacing={1}>
            <SectionLink sectionId={SectionIds.section1} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Top
            </SectionLink>
            <SectionLink sectionId={SectionIds.section2} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Section 2
            </SectionLink>
            <SectionLink sectionId={SectionIds.section3} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Skills
            </SectionLink>
          </Stack>
        </Flex>
        <Section sectionId="section1" bgColor="gray.150">
          <Flex direction="row" alignItems="stretch" flexGrow={1} w="100%" my={10} mx={20}>
            <Center w="40%">
              <Stack alignItems="center" spacing={10}>
                <Flex bgColor="gray.500" boxSize="200px" boxShadow="lg" borderRadius="100%"></Flex>
                <Heading color="gray.800" size="2xl" fontFamily={fonts.spartan} fontWeight={400}>
                  Olivier Ramier
                </Heading>
              </Stack>
            </Center>

            <Flex direction="column" py={20}>
              <Text fontSize="xl" mb={8}>
                I'm a french <Underlined>software engineer</Underlined> living in Berlin.
              </Text>
              <Box>
                <Text fontSize="2xl" fontWeight={800} color="gray.750" fontStyle="underlined">
                  My jam:
                </Text>
                <Text fontSize="xl" mb={3} ml={6}>
                  Passionate about the web, technology and learning.
                </Text>
                <Text fontSize="xl" ml={6}>
                  Offering freelance services in software development and consulting.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Section>
        <Section sectionId="section2" h="800px" bgColor="gray.100">
          <Center h="100%">
            <Text fontSize="xl">
              Freelance <Underlined>software</Underlined> engineer
            </Text>
          </Center>
        </Section>
        <SkillsSection />
      </Flex>
    </Layout>
  );
};

export default IndexPage;

const SectionLink: React.FC<{ sectionId: SectionIds; onScrollActive?: (sectionId: SectionIds) => void }> = ({
  sectionId,
  onScrollActive,
  children,
}) => {
  return (
    <Link>
      <ScrollLink
        onSetActive={() => onScrollActive && onScrollActive(sectionId)}
        activeClass="active_section_link"
        to={sectionId}
        spy={true}
        smooth={true}
        duration={1000}
      >
        {children}
      </ScrollLink>
    </Link>
  );
};

const Underlined: React.FC<{}> = ({ children }) => {
  return (
    <Text as="span" position="relative" zIndex={1} fontWeight={700}>
      <Text as="span" position="relative" zIndex={2} className="underlined">
        {children}
      </Text>
    </Text>
  );
};
