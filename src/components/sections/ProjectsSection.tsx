import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import * as React from "react";
//@ts-ignore
import SciMapWalkthroughVideo from "../../images/sci-map_walkthrough.webm";
//@ts-ignore
import SmartNotesWalkthroughVideo from "../../images/smartnotes_walkthrough.gif";

import { SectionIds } from "../../pages/index";
import { fonts } from "../../theme";
import { Link } from "../Link";
import { Section } from "./Section";

export const ProjectsSection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.projects} bgColor="gray.50" py={10}>
      <Flex
        direction="row-reverse"
        py={4}
        borderBottomWidth={3}
        borderBottomColor="gray.100"
        mb={10}
      >
        <Heading
          fontWeight={400}
          fontSize={{ base: "6xl", lg: "7xl" }}
          color="onyx"
        >
          Projects
        </Heading>
      </Flex>
      <Stack spacing={28} mb={16}>
        <Project
          title={
            <Heading color="blue.500">
              SmartNotes
              <Heading as="span" color="gray.500" fontSize="2xl">
                - WIP
              </Heading>
            </Heading>
          }
          renderTop={
            <Flex direction="column" mt={6}>
              <Center flexDirection="column">
                <Box w="80%" maxW="800px" boxShadow="md" mb={16}>
                  <Image src={SmartNotesWalkthroughVideo} />
                </Box>
              </Center>
            </Flex>
          }
          subTitle={
            <Text
              maxW="100%"
              fontSize="lg"
              fontWeight={800}
              color="sonic-silver"
              mb={4}
            >
              The idea behind SmartNotes is to provide a tool transforming ideas
              into composed text to boost productivity and even creativity. By
              processing any contextual knowledge useful for the desired output,
              SmartNotes aims to become the next iteration of text editors.
            </Text>
          }
          description={
            <>
              <Text>
                Using various NLP models from HuggingFace, GPT-3 and knowledge
                graphs, SmartNotes understands what you want to write, identify
                the relevant information and processes it to proide various
                functionalities such as next phrase autocompletion,
                notes-to-text, question generation, etc.
              </Text>
            </>
          }
          bulletPointsIconColor="almond"
          bulletPoints={[
            <Text as="span">
              Checkout the code on{" "}
              <Link
                href="https://github.com/Layvier/smart-note-taking"
                fontWeight={600}
                isExternal
              >
                Github
              </Link>
            </Text>,
            <Text as="span">
              <Text fontWeight={600} as="span">
                Tech stack:
              </Text>{" "}
              <Text as="span" fontWeight={300} fontSize="sm">
                Python, Node.js, TypeScript, GraphQl, HuggingFace, NLTK, GPT-3
              </Text>
            </Text>,
          ]}
        />
        <Project
          title={
            <Heading>
              <Link color="teal.500" href="https://mapedia.org" isExternal>
                Mapedia.org <ExternalLinkIcon boxSize={7} verticalAlign="top" />
              </Link>{" "}
              {/* <Heading as="span" color="gray.500" fontSize="2xl">
                - WIP
              </Heading> */}
            </Heading>
          }
          renderTop={
            <Flex direction="column" mt={6}>
              <Center flexDirection="column">
                <Box w="80%" maxW="800px" boxShadow="md" mb={16}>
                  <video autoPlay muted>
                    <source src={SciMapWalkthroughVideo} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              </Center>
            </Flex>
          }
          subTitle={
            <Text
              maxW="100%"
              fontSize="lg"
              fontWeight={800}
              color="sonic-silver"
              mb={4}
            >
              A collaborative learning map to explore knowledge intuitively, and
              find the best learning materials.
            </Text>
          }
          description={
            <>
              <Text>
                Having learned a lot online, in a self directed way, I always
                thought that something was missing to help find our way through
                this ocean of information.
              </Text>
              <Text mt={2}>
                With this project, my goal is to improve the way people learn
                online and create a new way to consume knowledge by leveraging
                the collective intelligence.
              </Text>
            </>
          }
          bulletPointsIconColor="almond"
          bulletPoints={[
            <Text as="span">
              Learn more about it in the{" "}
              <Link
                href="https://mapedia.org/about"
                fontWeight={600}
                isExternal
              >
                About section
              </Link>
            </Text>,
            <Text as="span">
              Checkout the code on{" "}
              <Link
                href="https://github.com/Mapedia-org/"
                fontWeight={600}
                isExternal
              >
                Github
              </Link>
            </Text>,
            <Text as="span">
              <Text fontWeight={600} as="span">
                Tech stack:
              </Text>{" "}
              <Text as="span" fontWeight={300} fontSize="sm">
                Node.js, TypeScript, Neo4j, Next.js, React, Apollo
                server/client, Chakra UI
              </Text>
            </Text>,
          ]}
        />
        <Project
          title={
            <Heading color="almond">Ant Colony Optimization algorithm</Heading>
          }
          description={
            <>
              <Text>
                “Ant colony” is a fascinating optimization algorithm inspired by
                how ants find the shortest path between food sources and their
                colony.
              </Text>
              <Text mt={2}>
                I decided to leverage Elixir’s actor model to simulate ants in
                their own processes and solve the famous{" "}
                <Link
                  href="https://en.wikipedia.org/wiki/Travelling_salesman_problem"
                  fontWeight={600}
                >
                  Travelling Salesman Problem (TSP)
                </Link>
                . This approach makes the algorithm extremely scalable as it is
                then able to run on thousands of processors at the same time.
              </Text>
            </>
          }
          bulletPointsIconColor="opal"
          bulletPoints={[
            <Text as="span">
              More on{" "}
              <Link
                href="https://www.youtube.com/watch?v=783ZtAF4j5g"
                fontWeight={600}
                isExternal
              >
                Ant Colony Optimization
              </Link>
            </Text>,
            <Text as="span">
              Checkout the code on{" "}
              <Link
                href="https://github.com/Layvier/ant-colony-elixir"
                fontWeight={600}
                isExternal
              >
                Github
              </Link>
            </Text>,
            <Text as="span">
              A{" "}
              <Link
                href="https://poolik.github.io/visual-aco/#/visualisation"
                fontWeight={600}
                isExternal
              >
                visualisation
              </Link>{" "}
              of Ant Colony Optimization
            </Text>,
          ]}
        />
      </Stack>
    </Section>
  );
};

const Project: React.FC<{
  title: React.ReactNode;
  renderTop?: React.ReactNode;
  subTitle?: React.ReactNode;
  description: React.ReactNode;
  bulletPointsIconColor: string;
  bulletPoints: React.ReactNode[];
}> = ({
  title,
  subTitle,
  renderTop,
  description,
  bulletPointsIconColor,
  bulletPoints,
}) => {
  return (
    <Flex direction="column">
      <Flex mb={6}>{title}</Flex>
      {renderTop}
      <Flex direction="column" ml={{ base: 4, sm: 8, md: 12, lg: 32 }} mr={10}>
        {subTitle}
        <Stack
          spacing={{ base: 5, lg: 20 }}
          direction={{ base: "column", lg: "row" }}
        >
          <Box flexGrow={1}>{description}</Box>
          <Box minW="40%">
            <List spacing={3} fontFamily={fonts.spartan} fontWeight={500}>
              {bulletPoints.map((bulletPoint) => (
                <ListItem display="flex" alignItems="center">
                  <ListIcon
                    as={ArrowForwardIcon}
                    color={bulletPointsIconColor}
                  />
                  {bulletPoint}
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};
