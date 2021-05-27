import { Flex, FlexProps, Heading, Link, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { fonts } from '../theme';
import { Link as ScrollLink } from 'react-scroll';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Flex alignItems="stretch" direction="column" position="relative">
      <Flex position="fixed" top={0} right={0} pt={2} pr={4}>
        <Stack spacing={1}>
          <SectionLink sectionId="section1">Section 1</SectionLink>
          <SectionLink sectionId="section2">Section 2</SectionLink>
          <SectionLink sectionId="section3">Section 3</SectionLink>
        </Stack>
      </Flex>
      <Section sectionId="section1" h="800px" bgColor="gray.200" py={10} px={20}>
        <Heading color="gray.800" size="2xl" fontFamily={fonts.spartan} fontWeight={400}>
          Olivier Ramier
        </Heading>
      </Section>
      <Section sectionId="section2" h="800px" bgColor="gray.400"></Section>
      <Section sectionId="section3" h="800px" bgColor="gray.600"></Section>
    </Flex>
  </Layout>
);

export default IndexPage;

const SectionLink: React.FC<{ sectionId: string }> = ({ sectionId, children }) => {
  return (
    <Link>
      <ScrollLink activeClass="active_section_link" to={sectionId} spy={true} smooth={true} duration={1000}>
        {children}
      </ScrollLink>
    </Link>
  );
};

const Section: React.FC<{ sectionId: string } & FlexProps> = ({ sectionId, children, ...flexProps }) => {
  return (
    <Flex h="800px" id={sectionId} {...flexProps}>
      {children}
    </Flex>
  );
};
