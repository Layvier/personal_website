import { Box, Text, Flex, VStack } from "@chakra-ui/layout";
import * as React from "react";
import { Section } from "./Section";
import { SectionIds } from "../../pages";
import { StylizedBox } from "../StylizedBox";
import { Underlined } from "../Underlined";

export const AboutMeSection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.about}>
      <Flex
        direction={["column", "column", "row"]}
        justify="space-between"
        alignItems="center"
      >
        <Box flexGrow={1} mr={[0, 0, "60px"]}>
          <Text color="white" as="h2" textStyle="h2" mb={8}>
            About Me
          </Text>
          <VStack spacing={4} color="white" textStyle="p2" alignItems="start">
            <Text as="p">
              I'm a french software engineer living in Berlin, passionate about
              the <Underlined>web, technology and learning</Underlined>. Growing
              up in the South West of France, I quickly got hooked by the web
              and started programming at 8. Later on, I graduated from one of
              the best engineering school in France (IMT Atlantique) with a
              degree in{" "}
              <Underlined>
                applied mathematics, computer science and algorithms.
              </Underlined>
            </Text>
            <Text as="p">
              I moved to Berlin in 2016 to work in startups and see the
              challenges they face from the inside. I was an early employee at{" "}
              <Underlined>Kreatize</Underlined> and{" "}
              <Underlined>Forto</Underlined>, where I learned a wide range of
              technologies and methodologies.
            </Text>
            <Text as="p">
              In 2020 I started my self-employed journey and I now alternate
              between working on personal projects and freelancing.
            </Text>
            <Text as="p">
              As a{" "}
              <Underlined>
                tech generalist and pragmatic problem solver
              </Underlined>
              , I combine skills ranging from{" "}
              <Underlined>machine learning to design</Underlined> for building
              outstanding products.
            </Text>
          </VStack>
        </Box>
        <Box color="white" alignSelf={["stretch", "start", "center"]}>
          <AboutMeBox />
        </Box>
      </Flex>
    </Section>
  );
};

const AboutMeBox: React.FC<{}> = () => {
  return (
    <Box
      width={["100%", "360px"]}
      height={["100%", "360px"]}
      position="relative"
      mt={["30px", "30px"]}
      mr={["15px", "30px"]}
    >
      <StylizedBox
        borderWidth="2px"
        borderColor="violet"
        position="absolute"
        bottom="0"
        right="0"
        left={["15px", "30px"]}
        top={["15px", "30px"]}
        width="100%"
        height="100%"
      />
      <StylizedBox
        borderWidth="2px"
        borderColor="teal-lighter"
        position="relative"
      >
        <VStack spacing="10px" alignItems={["stretch", "start"]}>
          <Text as="h4" textStyle="h4">
            Freelance Services
          </Text>
          <VStack spacing="6px" alignItems="start" textStyle="p3">
            <Text as="p">Startup consulting</Text>
            <Text as="p">API design and development</Text>
            <Text as="p">Data model design (DDD)</Text>
            <Text as="p">Software Architecture consulting</Text>
            <Text as="p">Prototyping - POC development</Text>
          </VStack>
        </VStack>
        <VStack spacing="10px" alignItems="start" marginTop="40px">
          <Text as="h4" textStyle="h4">
            Favorite Stack
          </Text>
          <VStack spacing="6px" textStyle="p3">
            <Text as="p">Typescript - Node.js - GraphQl - React</Text>
          </VStack>
        </VStack>
      </StylizedBox>
    </Box>
  );
};
