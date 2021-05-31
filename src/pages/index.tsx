import { Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Layout } from '../components/layout';
import { Section } from '../components/sections/Section';
import { SkillsSection } from '../components/sections/SkillsSection';
import { Seo } from '../components/seo';
import { fonts } from '../theme';

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
              Section 1
            </SectionLink>
            <SectionLink sectionId={SectionIds.section2} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Section 2
            </SectionLink>
            <SectionLink sectionId={SectionIds.section3} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Skills
            </SectionLink>
          </Stack>
        </Flex>
        <Section sectionId="section1" h="800px" bgColor="gray.200" py={10} px={20}>
          <Heading color="gray.800" size="2xl" fontFamily={fonts.spartan} fontWeight={400}>
            Olivier Ramier
          </Heading>
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
    <Text as="span" position="relative" zIndex={1}>
      <Text as="span" position="relative" zIndex={2} className="underlined">
        {children}
      </Text>
    </Text>
  );
};
