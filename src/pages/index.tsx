import * as React from "react";
import { Box, Stack } from "@chakra-ui/layout";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutMeSection } from "../components/sections/AboutMeSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { PreviouslySection } from "../components/sections/PreviouslySection"
import { SkillsSection } from "../components/sections/SkillsSection";
import { ContactSection } from "../components/sections/ContactSection";
import { SectionLink } from "../components/sections/SectionLink";
import BlackBackground from "../../public/images/black-bg.png";

export enum SectionIds {
  "hero" = "hero",
  "about" = "about",
  "testimonials" = "testimonials",
  "projects" = "projects",
  "previously" = "previously",
  "skills" = "skills",
  "contact" = "contact",
}

const IndexPage = () => {
  const [activeSection, setActiveSection] = React.useState<SectionIds>(SectionIds.hero);

  return (
    <Layout>
      <Seo title="Olivier Ramier" />
      <Stack
        spacing={0}
        position="fixed"
        top="20px"
        right="50px"
        color="white"
        mixBlendMode="difference"
        textTransform="uppercase"
        textStyle="p2"
        zIndex="99"
        display={["none", "flex", "flex"]}
      >
        <SectionLink sectionId={SectionIds.about} onScrollActive={sectionId => setActiveSection(sectionId)}>
          About me
        </SectionLink>
        <SectionLink sectionId={SectionIds.testimonials} onScrollActive={sectionId => setActiveSection(sectionId)}>
          Testimonials
        </SectionLink>
        <SectionLink sectionId={SectionIds.projects} onScrollActive={sectionId => setActiveSection(sectionId)}>
          Projects
        </SectionLink>
        <SectionLink sectionId={SectionIds.previously} onScrollActive={sectionId => setActiveSection(sectionId)}>
          Previously
        </SectionLink>
        <SectionLink sectionId={SectionIds.skills} onScrollActive={sectionId => setActiveSection(sectionId)}>
          Skills
        </SectionLink>
      </Stack>
      <Box bgImage={BlackBackground} bgSize="cover">
        <HeroSection />
        <AboutMeSection />
        <TestimonialsSection />
      </Box>
      <ProjectsSection />
      <Box bgImage={BlackBackground} bgSize="cover">
        <PreviouslySection />
      </Box>
      <SkillsSection />
      <Box bgImage={BlackBackground} bgSize="cover">
        <ContactSection />
      </Box>
    </Layout>
  );
};

export default IndexPage;
