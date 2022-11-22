import * as React from "react";
import { Flex, Stack, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { HeroSection } from "../components/sections-new/HeroSection";
import { AboutMeSection } from "../components/sections-new/AboutMeSection";
import { TestimonialsSection } from "../components/sections-new/TestimonialsSection";
import { ProjectsSection } from "../components/sections-new/ProjectsSection";
import BlackBackground from "../../public/images/black-bg.png";

export enum SectionIds {
  "hero" = "hero",
  "about" = "about",
  "testimonials" = "testimonials",
  "projects" = "projects",
}

const IndexPage = () => {
  const [activeSection, setActiveSection] = React.useState<SectionIds>(SectionIds.hero);

  return (
    <Layout>
      <Seo title="Olivier Ramier" />
      <Box bgImage={BlackBackground} bgSize="cover">
        <HeroSection />
        <AboutMeSection />
        <TestimonialsSection />
      </Box>
      <ProjectsSection />
    </Layout>
  );
};

export default IndexPage;
