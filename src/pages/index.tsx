import { Flex, Link, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Layout } from '../components/layout';
import { AboutMeSection } from '../components/sections/AboutMeSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { WorkExperienceSection } from '../components/sections/WorkExperienceSection';
import { Seo } from '../components/seo';

export enum SectionIds {
  'section1' = 'section1',
  'section2' = 'section2',
  'section3' = 'section3',
  projects = 'projects',
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
          color={[SectionIds.section3, SectionIds.section2].includes(activeSection) ? 'gray.150' : 'gray.850'}
          transition="color 200ms"
          minW="96px"
        >
          <Stack spacing={1}>
            <SectionLink sectionId={SectionIds.section1} onScrollActive={sectionId => setActiveSection(sectionId)}>
              About me
            </SectionLink>
            <SectionLink sectionId={SectionIds.projects} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Projects
            </SectionLink>
            <SectionLink sectionId={SectionIds.section2} onScrollActive={sectionId => setActiveSection(sectionId)}>
              Work Exp
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
    <ScrollLink
      onSetActive={() => onScrollActive && onScrollActive(sectionId)}
      activeClass="active_section_link"
      to={sectionId}
      spy={true}
      smooth={true}
      duration={1000}
    >
      <Link as="span">{children}</Link>
    </ScrollLink>
  );
};
