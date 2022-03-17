import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
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
import * as React from "react";
//@ts-ignore
import SciMapWalkthroughVideo from "../../images/sci-map_walkthrough.webm";
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
        borderBottomWidth={4}
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
            <Heading>
              <Link color="teal.500" href="https://sci-map.org" isExternal>
                Sci-Map.org <ExternalLinkIcon boxSize={7} verticalAlign="top" />
              </Link>{" "}
              <Heading as="span" color="gray.500" fontSize="2xl">
                - WIP
              </Heading>
            </Heading>
          }
          content={
            <Stack spacing={5} mt={4}>
              <Center flexDirection="column">
                <Box w="80%" maxW="800px" boxShadow="md">
                  <video autoPlay muted>
                    <source src={SciMapWalkthroughVideo} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </Box>
                <Text
                  maxW="860px"
                  textAlign="center"
                  mt={3}
                  fontSize="lg"
                  fontWeight={800}
                  color="sonic-silver"
                >
                  A non profit, collaborative learning map to explore knowledge
                  intuitively, and find the best learning materials.
                </Text>
              </Center>
              <Stack direction={{ base: "column", lg: "row" }} spacing={5}>
                <Box flexGrow={1}>
                  <Text>
                    Having learned a lot online, in a self directed way, I
                    always thought that something was missing to help find our
                    way through this ocean of information.
                  </Text>
                  <Text mt={2}>
                    With this project, my goal is to improve the way people
                    learn online and create a new way to consume knowledge by
                    leveraging the collective intelligence.
                  </Text>
                </Box>
                <Box minW="40%" fontFamily={fonts.spartan} fontWeight={500}>
                  <List spacing={3}>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon as={ArrowForwardIcon} color="almond" />
                      <Text as="span">
                        Learn more about it in the{" "}
                        <Link
                          href="https://sci-map.org/about"
                          fontWeight={600}
                          isExternal
                        >
                          About section
                        </Link>
                      </Text>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon as={ArrowForwardIcon} color="almond" />
                      <Text as="span">
                        Checkout the code on{" "}
                        <Link
                          href="http://github.com/sci-map-org/"
                          fontWeight={600}
                          isExternal
                        >
                          Github
                        </Link>
                      </Text>
                    </ListItem>
                    <ListItem display="flex">
                      <ListIcon as={ArrowForwardIcon} color="almond" mt={1} />
                      <Text as="span">
                        <Text fontWeight={600} as="span">
                          Tech stack:
                        </Text>{" "}
                        <Text as="span" fontWeight={300} fontSize="sm">
                          Node.js, TypeScript, Neo4j, Next.js, React, Apollo
                          server/client, Chakra UI
                        </Text>
                      </Text>
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Stack>
          }
        />
        <Project
          title={
            <Heading color="almond">Ant Colony Optimization algorithm</Heading>
          }
          content={
            <Stack spacing={5} direction={{ base: "column", lg: "row" }}>
              <Box flexGrow={1}>
                <Text>
                  “Ant colony” is a fascinating optimization algorithm inspired
                  by how ants find the shortest path between food sources and
                  their colony.
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
                  . This approach makes the algorithm extremely scalable as it
                  is then able to run on thousands of processors at the same
                  time.
                </Text>
              </Box>
              <Box minW="40%">
                <List spacing={3} fontFamily={fonts.spartan} fontWeight={500}>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon as={ArrowForwardIcon} color="opal" />
                    <Text as="span">
                      More on{" "}
                      <Link
                        href="https://www.youtube.com/watch?v=783ZtAF4j5g"
                        fontWeight={600}
                        isExternal
                      >
                        Ant Colony Optimization
                      </Link>
                    </Text>
                  </ListItem>
                  <ListItem display="flex" alignItems="center">
                    <ListIcon as={ArrowForwardIcon} color="opal" />
                    <Text as="span">
                      Checkout the code on{" "}
                      <Link
                        href="https://github.com/Layvier/ant-colony-elixir"
                        fontWeight={600}
                        isExternal
                      >
                        Github
                      </Link>
                    </Text>
                  </ListItem>
                  <ListItem display="flex">
                    <ListIcon as={ArrowForwardIcon} color="opal" mt={1} />
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
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Stack>
          }
        />
      </Stack>
    </Section>
  );
};

const Project: React.FC<{
  title: React.ReactNode;
  content: React.ReactNode;
}> = ({ title, content }) => {
  return (
    <Flex direction="column">
      <Flex mb={4}>{title}</Flex>
      <Flex ml={{ base: 10, sm: 12, md: 16, lg: 32 }} mr={10}>
        {content}
      </Flex>
    </Flex>
  );
};
