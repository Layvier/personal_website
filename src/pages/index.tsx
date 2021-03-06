import { Flex, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Layout } from '../components/layout';
import { AboutMeSection } from '../components/sections/AboutMeSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SectionLink } from '../components/sections/SectionLink';
import { SkillsSection } from '../components/sections/SkillsSection';
import { WorkExperienceSection } from '../components/sections/WorkExperienceSection';
import { Seo } from '../components/seo';

export enum SectionIds {
  'section1' = 'section1',
  'section2' = 'section2',
  'section3' = 'section3',
  projects = 'projects',
  contact = 'contact',
}
const IndexPage = () => {
  const [activeSection, setActiveSection] = React.useState<SectionIds>(SectionIds.section1);
  return (
    <Layout>
      <Seo title="Olivier Ramier" />

      <Flex alignItems="stretch" direction="column" position="relative">
        <Flex
          position="fixed"
          display={{ base: 'none', lg: 'initial' }}
          top={2}
          right={2}
          pt={2}
          pl={2}
          pr={3}
          pb={2}
          color={[SectionIds.section3, SectionIds.section2].includes(activeSection) ? 'gray.150' : 'gray.850'}
          transition="color 200ms"
          minW="106px"
        >
          <Stack spacing={1}>
            <SectionLink sectionId={SectionIds.section1} onScrollActive={sectionId => setActiveSection(sectionId)}>
              About me
            </SectionLink>
            <SectionLink sectionId={SectionIds.projects} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Projects
            </SectionLink>
            <SectionLink sectionId={SectionIds.section2} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Previously
            </SectionLink>
            <SectionLink sectionId={SectionIds.section3} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Skills
            </SectionLink>
          </Stack>
        </Flex>
        <AboutMeSection />
        <ProjectsSection />
        <WorkExperienceSection />
        <SkillsSection />
        <ContactSection />
      </Flex>
    </Layout>
  );
};

export default IndexPage;
