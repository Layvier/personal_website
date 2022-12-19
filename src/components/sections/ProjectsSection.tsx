import * as React from "react";
import { Box, Text, Flex, Link, VStack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import { Section } from "./Section";
import { SectionIds } from "../../pages";
import { StylizedBox } from "../StylizedBox";
import PurpleThing from "../../images/purple-thing-2.svg";
import SmartnotesWalkthroughGif from "../../images/smartnotes_walkthrough.gif";
import MapediaWalkthroughGif from "../../images/sci-map_walkthrough.gif";
import Circle from "../../images/circle.svg";

interface Project {
  id: number;
  title: React.ReactNode;
  summary?: React.ReactNode;
  image?: any;
  details: React.ReactNode;
  accentColor: string;
  techStackTag: string;
  linkTags: React.ReactNode[];
}

const projects: Project[] = [
  {
    id: 1,
    title: (
      <>
        mAPEDIA
        <Text as="span" color="teal-darker">
          .org
        </Text>
      </>
    ),
    accentColor: "teal-darker",
    summary: (
      <>
        A collaborative learning map to explore knowledge intuitively, and find
        the best learning materials.
      </>
    ),
    details: (
      <>
        Having learned a lot online, in a self directed way, I always thought
        that something was missing to help find our way through this ocean of
        information.
        <br />
        <br />
        With this project, my goal is to improve the way people learn online and
        create a new way to consume knowledge by leveraging the collective
        intelligence..
      </>
    ),
    image: MapediaWalkthroughGif,
    techStackTag:
      "Node.js, TypeScript, Neo4j, Next.js, React, Apollo server/client, Chakra UI",
    linkTags: [
      <>
        Learn more about it in the{" "}
        <Link href="https://mapedia.org/about" color="teal-darker" isExternal>
          About
        </Link>{" "}
        section
      </>,
      <>
        Checkout the code on{" "}
        <Link
          href="https://github.com/Mapedia-org"
          color="teal-darker"
          isExternal
        >
          Github
        </Link>
      </>,
    ],
  },
  {
    id: 0,
    title: (
      <>
        SmartNotes{" "}
        <Text as="span" color="violet">
          prototype
        </Text>
      </>
    ),
    accentColor: "violet",
    summary: (
      <>
        The idea behind SmartNotes is to provide a tool transforming ideas into
        composed text to boost productivity and even creativity, by processing
        any contextual knowledge useful for the desired output.
      </>
    ),
    details: (
      <>
        Using various NLP models from HuggingFace, GPT-3 and knowledge graphs,
        SmartNotes understands what you want to write, identify the relevant
        information and processes it to proide various functionalities such as
        next phrase autocompletion, notes-to-text, question generation, etc.
      </>
    ),
    image: SmartnotesWalkthroughGif,
    techStackTag:
      "Python, Node.js, TypeScript, GraphQl, HuggingFace, NLTK, GPT-3",
    linkTags: [
      <>
        Checkout the code on{" "}
        <Link
          href="https://github.com/Layvier/smart-note-taking"
          color="violet"
          isExternal
        >
          Github
        </Link>
      </>,
    ],
  },
  {
    id: 2,
    title: (
      <>
        Ant Colony Optimization{" "}
        <Text as="span" color="violet">
          algorithm
        </Text>
      </>
    ),
    accentColor: "violet",
    details: (
      <>
        “Ant colony” is a fascinating optimization algorithm inspired by how
        ants find the shortest path between food sources and their colony.
        <br />
        <br />I decided to leverage Elixir’s actor model to simulate ants in
        their own processes and solve the famous{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Travelling_salesman_problem"
          color="violet"
          fontWeight="600"
          isExternal
        >
          Travelling Salesman Problem (TSP)
        </Link>
        . This approach makes the algorithm extremely scalable as it is then
        able to run on thousands of processors at the same time.
      </>
    ),
    techStackTag:
      "Python, Node.js, TypeScript, GraphQl, HuggingFace, NLTK, GPT-3",
    linkTags: [
      <>
        Checkout the code on{" "}
        <Link
          href="https://github.com/Layvier/ant-colony-elixir"
          color="violet"
          isExternal
        >
          Github
        </Link>
      </>,
    ],
  },
];

export const ProjectsSection: React.FC<{}> = () => {
  return (
    <Box pos="relative">
      <Section sectionId={SectionIds.projects} w="100%" alignItems="end">
        <Image
          src={PurpleThing}
          position="absolute"
          maxW={["400px", "500px", "800px"]}
          top={["-75px", "-100px", "-150px"]}
          left={["-100px", "-25px"]}
        />
        <Text color="black" as="h2" textStyle="h2">
          Projects
        </Text>
        <VStack spacing={12} mt={[20, 40]} gridGap={[8, 20]}>
          {projects.map((project) => (
            <ProjectShowcase key={project.id} project={project} />
          ))}
        </VStack>
      </Section>
    </Box>
  );
};

const ProjectShowcase: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Box>
      <Text as="h3" textStyle="h3">
        {project.title}
      </Text>
      <Flex
        direction={["column", "column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        {project.image && (
          <Image
            width={project.summary ? ["100%", "100%", "65%"] : "100%"}
            flexGrow={1}
            src={project.image}
            mr={[0, 0, 8]}
            boxShadow="-1px 1px 34px -11px"
            color={project.accentColor}
            order={[2, 2, 1]}
            mt={[4, 6, 12]}
          />
        )}
        {project.summary && (
          <Text
            as="p"
            textStyle="p1"
            width={project.image ? ["100%", "100%", "30%"] : "100%"}
            order={[1, 1, 2]}
            mt={[4, 6, 12]}
            lineHeight={1.2}
          >
            {project.summary}
          </Text>
        )}
      </Flex>
      <Text as="p" textStyle="p2" mt={10} mb={8} lineHeight={1.4}>
        {project.details}
      </Text>
      <Box display="flex" flexWrap="wrap" gridGap={[2, 4]}>
        <TechStackTag
          text={project.techStackTag}
          accentColor={project.accentColor}
        />
        {project.linkTags.map((tag, index) => (
          <LinkTag key={index} accentColor={project.accentColor}>
            {tag}
          </LinkTag>
        ))}
      </Box>
    </Box>
  );
};

const TechStackTag: React.FC<{
  text: string;
  accentColor: string;
}> = ({ text, accentColor }) => {
  return (
    <StylizedBox
      bgColor="white"
      borderColor={accentColor}
      px={[4, 6]}
      py={[2, 4]}
    >
      <Flex align="start">
        <Image src={Circle} w={["8px", "12px"]} mt={1.5} mr={2} />
        <Box>
          <Text as="h5" textStyle="h5" textTransform="uppercase" mb={1}>
            Tech Stack
          </Text>
          <Text as="p" textStyle="p2">
            {text}
          </Text>
        </Box>
      </Flex>
    </StylizedBox>
  );
};

const LinkTag: React.FC<{
  accentColor: string;
}> = ({ accentColor, children }) => {
  return (
    <StylizedBox
      bgColor="white"
      borderColor={accentColor}
      px={[4, 6]}
      py={[2, 4]}
      maxWidth="300px"
    >
      <Flex align="start">
        <Icon as={ExternalLinkIcon} mt={1.5} mr={2} color={accentColor} />
        <Text as="h5" textStyle="h5" textTransform="uppercase" mb={1}>
          {children}
        </Text>
      </Flex>
    </StylizedBox>
  );
};
