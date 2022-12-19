import * as React from "react";
import { Box, Text, Flex, VStack, Link } from "@chakra-ui/layout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { Section } from "./Section";
import { SectionIds } from "../../pages";

interface WorkPosition {
  id: number;
  workplace: string;
  url: string;
  isFreelance: boolean;
  summary: { position: string; description: string };
  workDuration: string;
  mainRoles: string[];
}

const workPositions: WorkPosition[] = [
  {
    id: 0,
    workplace: "Simple Construction Ltd",
    url: "https://www.simpleconstruction.tech/",
    isFreelance: true,
    summary: {
      position: "Software Engineer",
      description:
        "for a London-based startup developing a software to manage construction projects",
    },
    workDuration: "April 2022 - May 2022",
    mainRoles: [
      "Setup of a CI/CD pipeline and preview apps for a Firebase application",
      "e2e and unit testing environment setup (Cypress, Jest, React Testing Library)",
      "Implementation of e2e tests for critical flows of the product",
    ],
  },
  {
    id: 1,
    workplace: "Wonder",
    isFreelance: true,
    url: "https://wonder.me/",
    summary: {
      position: "Fullstack Engineer",
      description:
        "freelancing contract for a Berlin startup developing a spatial chat interactive application for virtual events",
    },
    workDuration: "July 2021 - October 2021",
    mainRoles: [
      "Supported the rewriting of the frontend of the application in a highly scalable, expandable and maintainable way",
      "Worked in a cross functional team, was involved in early product and design decisions",
      "Tech stack: Typescript, React, Sass, WebRTC, WebSockets, Node.js",
    ],
  },
  {
    id: 2,
    workplace: "Entrepreneur First",
    url: "https://www.joinef.com/",
    isFreelance: false,
    summary: {
      position: "Cohort Member.",
      description: "Joined Entrepreneur First Berlin's 5th cohort",
    },
    workDuration: "April 2020 - June 2020",
    mainRoles: [
      "Formed several teams following Entrepreneur First’s cofounder matching framework",
      "Went through ideation, market research and customer development phases",
    ],
  },
  {
    id: 3,
    workplace: "Forto",
    isFreelance: false,
    url: "https://forto.com/",
    summary: {
      position: "Software Engineer.",
      description:
        "Backend software engineer (Node.js/Typescript) for a digital freight forwarder startup with event-driven microservice architecture",
    },
    workDuration: "Mar 2018  - Mar 2020",
    mainRoles: [
      "Designed and implemented core features for product demos, client side reporting and user management",
      "Contributed to the hiring process, by interviewing and evaluating candidates",
      "Coordinated a team of 3 people in charge of the customer facing platform",
      "Designed and implemented an MVP for a distributed tracing system",
      "Designed, implemented and maintained multiple micro-services related to the customer facing platform and rate management",
    ],
  },
  {
    id: 4,
    workplace: "kreatize",
    url: "https://kreatize.com/",
    isFreelance: false,
    summary: {
      position: "Junior Software Engineer.",
      description:
        "FullStack JavaScript development in a seed-level web start-up offering a SaaS solution to manufacturing companies",
    },
    workDuration: "Nov 2016  - Jan 2018",
    mainRoles: [
      "Migrated the platform from Laravel and JQuery to Hapi.js and Vue.js",
      "Designed, implemented and maintained the company's public API",
      "Designed and implemented development tooling for API testing",
    ],
  },
  {
    id: 5,
    workplace: "PersEE",
    isFreelance: false,
    url: "https://pers-ee.com/#/",
    summary: {
      position: "Junior Software Engineer.",
      description:
        "FullStack JavaScript development in a seed-level web start-up offering a SaaS solution to manufacturing companies",
    },
    workDuration: "Mar 2016  - Nov 2016",
    mainRoles: [
      "Designed, implemented and maintained the company's public API",
      "Designed, implemented, and maintained a model reducing the investment cost of a hydrogen supply chain up to 25%",
      "Designed and implemented a Python service for real time hydrogen distribution optimization under uncertainty. Reduced operating costs by 10% and risks of shortages by 5%",
    ],
  },
];

export const PreviouslySection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.previously} pt="120px">
      <Text color="white" as="h2" textStyle="h2" mb={[10, 12, 20]}>
        Previously
      </Text>
      <VStack spacing={24} w="100%">
        {workPositions.map((position) => (
          <WorkPosition key={position.id} position={position} />
        ))}
      </VStack>
    </Section>
  );
};

const WorkPosition: React.FC<{ position: WorkPosition }> = ({ position }) => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      color="white"
      gridGap={[2, 2, 12]}
      w="100%"
    >
      <Box flexShrink={0} w={["100%", "100%", "30%"]}>
        {!position.url ? (
          <Text
            as="h3"
            fontSize={["24px", "36px"]}
            textTransform="uppercase"
            fontWeight="600"
            lineHeight={1.25}
            textAlign={["start", "start", "end"]}
          >
            {position.workplace}
          </Text>
        ) : (
          <Link href={position.url} isExternal>
            <Text
              as="h3"
              fontSize={["24px", "36px"]}
              textTransform="uppercase"
              fontWeight="600"
              lineHeight={1.25}
              textAlign={["start", "start", "end"]}
            >
              {position.workplace}
            </Text>
          </Link>
        )}
        <Text
          as="h4"
          textStyle="h4"
          color="teal-light"
          mt={1}
          textAlign="end"
          display={["none", "none", "block"]}
        >
          {position.workDuration}
        </Text>
      </Box>
      <Flex flexGrow={1} direction="column">
        <Text as="p" textStyle="p1" mb={4}>
          {position.isFreelance && (
            <Text as="span" color="yellow">
              /Freelance/{" "}
            </Text>
          )}
          <Text as="span" color="violet">
            {position.summary.position}{" "}
          </Text>
          {position.summary.description}
        </Text>
        <VStack ml={6} spacing={2} align="start">
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
  );
};

const MainRole: React.FC<{ role: string }> = ({ role }) => {
  return (
    <Flex gridGap={2} align="center">
      <Icon as={ArrowForwardIcon} widht="12px" color="violet" />
      <Text as="p" textStyle="p">
        {role}
      </Text>
    </Flex>
  );
};
