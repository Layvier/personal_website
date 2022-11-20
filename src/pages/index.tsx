import * as React from "react";
import { Flex, Stack, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Layout } from "../components/layout";
import { Seo } from "../components/seo";
import { HeroSection } from "../components/sections-new/HeroSection";

export enum SectionIds {
  "hero" = "hero",
}

const IndexPage = () => {
  const [activeSection, setActiveSection] = React.useState<SectionIds>(SectionIds.hero);

  return (
    <Layout>
      <Seo title="Olivier Ramier" />
      <HeroSection />
    </Layout>
  );
};

export default IndexPage;
