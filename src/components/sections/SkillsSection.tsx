import * as React from "react";
import { Box, Text, Flex, Link } from "@chakra-ui/layout";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Image,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Divider
} from "@chakra-ui/react";
import { Section } from "./Section";
import { SectionIds } from "../../pages";
import PurpleThingTwo from "../../images/purple-thing.svg";

interface Skill {
  id: number,
  name: string,
  description: string,
  moreInfoLink?: string,
}

const skills = [
  {
    id: 0,
    name: "ReactJS",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 1,
    name: "TypeScript",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 2,
    name: "Figma",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 3,
    name: "JavaScript",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 4,
    name: "SQL",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 5,
    name: "Next.js",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 6,
    name: "GraphQL",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 7,
    name: "TypeScript",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 8,
    name: "ReactJS",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 9,
    name: "Figma",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 10,
    name: "ReactJS",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
  {
    id: 11,
    name: "Next.js",
    description: "React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components.",
    moreInfoLink: '#'
  },
]

export const SkillsSection: React.FC<{}> = () => {
  return (
    <Box pos="relative">
      <Section sectionId={SectionIds.skills} w="100%">
        <Image
          src={PurpleThingTwo}
          pointerEvents="none"
          position="absolute"
          maxW={["400px", "500px", "800px"]}
          top={["-200px", "-300px"]}
          left={["-100px", "-25px"]}
        />
        <Text as="h2" textStyle="h2" my={16} alignSelf="end">Skills</Text>
        <Flex flexWrap="wrap" gridGap={[2, 4]} justifyContent={["end"]}>
          {skills.map(skill => <SkillTag key={skill.id} skill={skill} />)}
        </Flex>
      </Section>
    </Box>
  );
};

const SkillTag: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box
          tabIndex={0}
          role='button'
          px={4}
          py={2}
          bg="white"
          borderWidth="3px"
          borderColor="black"
          children={
            <Text as="h4" fontWeight="700" fontSize={["14px", "23px"]}>{skill.name}</Text>
          }
          transition="all ease .2s"
          _hover={{ backgroundColor: "black", color: "white", borderColor: "teal-light" }}
        />
      </PopoverTrigger>
      <PopoverContent outline="none">
        <PopoverArrow />
        <PopoverBody bg="black" borderWidth="3px" borderColor="teal-light" color="white" p={6}>
          <Text as="h4" textStyle="h4">{skill.name}</Text>
          <Divider color="teal-light" width="50px" borderWidth="2px" my={3} opacity={1} />
          <Text as="p" textStyle="p3" mb={4}>{skill.description}</Text>
          <Link href={skill.moreInfoLink}>
            <Flex align="center" w="100%" justify="end" gridGap={2} color="teal-light">
              <Text as="h5" textStyle="h5">More</Text>
              <Icon as={ExternalLinkIcon} />
            </Flex>
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

