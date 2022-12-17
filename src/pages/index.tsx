import * as React from "react";
import { Box, Stack } from "@chakra-ui/layout";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutMeSection } from "../components/sections/AboutMeSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { PreviouslySection } from "../components/sections/PreviouslySection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ContactSection } from "../components/sections/ContactSection";
import { SectionLink } from "../components/sections/SectionLink";
// @ts-ignore
import BlackBackground from "../images/black-bg.png";

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
  const [_activeSection, setActiveSection] = React.useState<SectionIds>(
    SectionIds.hero
  );
  return (
    <Layout>
      <Seo title="Olivier Ramier" />
      <Box
        position="fixed"
        color="white"
        display={["none", "initial"]}
        top={12}
        right={10}
        mixBlendMode={
          _activeSection === SectionIds.hero ? "normal" : "difference"
        }
        transition="color 200ms"
        w="160px"
        zIndex="99"
      >
        <Stack
          minW="350px"
          spacing={0}
          textTransform="uppercase"
          textStyle="p2"
          display={["none", "flex"]}
        >
          <SectionLink
            sectionId={SectionIds.hero}
            hidden={true}
            onScrollActive={(sectionId) => setActiveSection(sectionId)}
          >
            Hero
          </SectionLink>
          <SectionLink
            sectionId={SectionIds.about}
            onScrollActive={(sectionId) => setActiveSection(sectionId)}
          >
            About me
          </SectionLink>
          <SectionLink
            sectionId={SectionIds.testimonials}
            onScrollActive={(sectionId) => setActiveSection(sectionId)}
          >
            Testimonials
          </SectionLink>
          <SectionLink
            sectionId={SectionIds.projects}
            onScrollActive={(sectionId) => setActiveSection(sectionId)}
          >
            Projects
          </SectionLink>
          <SectionLink
            sectionId={SectionIds.previously}
            onScrollActive={(sectionId) => setActiveSection(sectionId)}
          >
            Previously
          </SectionLink>
          <SectionLink
            sectionId={SectionIds.skills}
            onScrollActive={(sectionId) => setActiveSection(sectionId)}
          >
            Skills
          </SectionLink>
          <SectionLink
            sectionId={SectionIds.contact}
            onScrollActive={(sectionId) => setActiveSection(sectionId)}
          >
            Contact
          </SectionLink>
        </Stack>
      </Box>
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
