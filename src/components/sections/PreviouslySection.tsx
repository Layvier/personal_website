import * as React from "react";
import { Box, Text, Flex, VStack } from "@chakra-ui/layout";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Icon } from "@chakra-ui/react";
import { Section } from "./Section";
import { SectionIds } from "../../pages";

interface WorkPosition {
  id: number,
  workplace: string,
  isFreelance: boolean,
  summary: { position: string, description: string },
  workDuration: string,
  mainRoles: string[]
}

const workPositions: WorkPosition[] = [
  {
    id: 0,
    workplace: "Simple Construction Ltd",
    isFreelance: true,
    summary: {
      position: 'Software Engineer',
      description: "for a London-based startup developing a software to manage construction projects",
    },
    workDuration: "April 2022 - May 2022",
    mainRoles: [
      "Setup of a CI/CD pipeline and preview apps for a Firebase application",
      "e2e and unit testing environment setup (Cypress, Jest, React Testing Library)",
      "Implementation of e2e tests for critical flows of the product",
    ]
  },
  {
    id: 1,
    workplace: "Wonder",
    isFreelance: true,
    summary: {
      position: "Fullstack Engineer",
      description: "freelancing contract for a Berlin startup developing a spatial chat interactive application for virtual events"
    },
    workDuration: "July 2021 - October 2021",
    mainRoles: [
      "Supported the rewriting of the frontend of the application in a highly scalable, expandable and maintainable way",
      "Worked in a cross functional team, was involved in early product and design decisions",
      "Tech stack: Typescript, React, Sass, WebRTC, WebSockets, Node.js",
    ]
  },
]

export const PreviouslySection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.previously} pt="120px" pb="160px">
      <Text color="white" as="h2" textStyle="h2" mb={[8, 16]}>Previously</Text>
      <VStack spacing={24} w="100%">
        {workPositions.map(position => (
          <WorkPosition key={position.id} position={position} />
        ))}
      </VStack>
    </Section>
  );
};

const WorkPosition: React.FC<{ position: WorkPosition }> = ({ position }) => {
  return (
    <Flex direction={["column", "column", "row"]} color="white" gridGap={[2, 2, 12]}>
      <Box flexShrink={0} w={["100%", "100%", "30%"]}>
        <Text
          as="h3"
          fontSize={["24px", "36px"]}
          textTransform="uppercase"
          fontWeight="600"
          textAlign={["start", "start", "end"]}
        >
          {position.workplace}
        </Text>
        <Text
          as="h4"
          textStyle="h4"
          color="teal-light"
          mt={4}
          textAlign="end"
          display={["none", "none", "block"]}
        >
          {position.workDuration}
        </Text>
      </Box>
      <Flex flexGrow={1} direction="column">
        <Text as="p" textStyle="p1" mb={4}>
          {position.isFreelance && <Text as="span" color="yellow">/Freelance/ </Text>} 
          <Text as="span" color="violet">{position.summary.position} </Text> 
          {position.summary.description}
        </Text>
        <VStack spacing={2} align="start">
          {position.mainRoles.map((role, index) => (
            <MainRole role={role} key={index} />
          ))}
        </VStack>
      </Flex>
      <Text
        as="h4"
        textStyle="h4"
        color="teal-light"
        mt={4}
        textAlign="end"
        display={["block", "block", "none"]}
      >
        {position.workDuration}
      </Text>
    </Flex>
  )
}

const MainRole: React.FC<{ role: string }> = ({ role }) => {
  return (
    <Flex gridGap={2} align="center">
      <Icon as={ArrowForwardIcon} widht="12px" color="violet" />
      <Text as="p" textStyle="p">{role}</Text>
    </Flex>
  );
}
