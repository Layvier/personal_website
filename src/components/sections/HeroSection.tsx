import * as React from "react";
import { Box, Text, Link, VStack } from "@chakra-ui/layout";
import { Section } from "./Section";
import { SectionIds } from "../../pages";
import GreenThing from "../../images/green-thing.svg";
import GreenThingMobile from "../../images/green-thing-mobile.svg";

export const HeroSection: React.FC<{}> = () => {
  return (
    <Box
      bgImage={[GreenThingMobile, GreenThing]}
      bgPos={["center 30%", "center top"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Section
        sectionId={SectionIds.hero}
        fullHeight={true}
        justifyContent="space-between"
        pb="60px"
      >
        <Text color="white" as="h1" textStyle="h1">
          Olivier
          <br />
          Ramier
        </Text>
        <VStack spacing={[4, 2]} alignItems="start" textStyle="h4">
          <Text color="white" as="h4">
            Consulting
          </Text>
          <Text color="white" as="h4">
            Building Stuff (Checkout{" "}
            <Link color="teal-lighter" href="#">
              Mapedia
            </Link>
            )
          </Text>
          <Text color="white" as="h4">
            Fullstack Software Development
          </Text>
        </VStack>
      </Section>
    </Box>
  );
};
