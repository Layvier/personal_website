import { Box, Center, Heading, Text, Wrap, WrapItem } from '@chakra-ui/layout';
import * as React from 'react';
import { fonts } from '../../theme';
import { Section } from './Section';

interface Skill {
  name: string;
  size: number; // between 1 and 10
  //   popoverContent: string | React.ReactNode TODO
}

const skills: Skill[] = [
  {
    name: 'TypeScript',
    size: 10,
  },
  {
    name: 'React.js',
    size: 9,
  },
  {
    name: 'Domain Driven Design',
    size: 8,
  },
  {
    name: 'D3.js',
    size: 4,
  },
  {
    name: 'Node.js',
    size: 9,
  },
  {
    name: 'Neo4j',
    size: 7,
  },
  {
    name: 'PostgreSQL',
    size: 6,
  },
  {
    name: 'MySQL',
    size: 7,
  },
  {
    name: 'MongoDb',
    size: 8,
  },
  {
    name: 'Python',
    size: 5,
  },
  {
    name: 'Apollo',
    size: 9,
  },
  {
    name: 'GraphQl',
    size: 9,
  },

  {
    name: 'Operations Research',
    size: 8,
  },
  {
    name: 'Graph Theory',
    size: 8,
  },
  {
    name: 'JavaScript',
    size: 9,
  },
  {
    name: 'Object Oriented Programming',
    size: 8,
  },
  {
    name: 'Functional Programming',
    size: 8,
  },
  {
    name: 'Software Architecture',
    size: 7,
  },
  {
    name: 'Microservices',
    size: 7,
  },
  {
    name: 'AWS',
    size: 5,
  },
  {
    name: 'Stochastic Programming',
    size: 7,
  },
  {
    name: 'Probabilistic Programming',
    size: 5,
  },
  {
    name: 'Next.js',
    size: 8,
  },
  {
    name: 'UI Design',
    size: 5,
  },
  {
    name: 'UX Design',
    size: 5,
  },
  {
    name: 'Figma',
    size: 5,
  },
  {
    name: 'Elixir',
    size: 6,
  },
  {
    name: 'Vue.js',
    size: 7,
  },

  {
    name: 'Chakra UI',
    size: 7,
  },

  {
    name: 'HTML/CSS',
    size: 7,
  },
];

export const SkillsSection: React.FC<{}> = () => {
  return (
    <Section sectionId="section3" minH="100vh" bgColor="onyx">
      <Center>
        <Box maxW="800px" mt={20} mb={20}>
          <Wrap spacing="10px" justify="center" align="center">
            {skills.map(skill => (
              <WrapItem>
                <SkillTag skill={skill} />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Center>
      <Center w="100%" mb={20}>
        <Heading size="3xl" fontWeight={800} stroke="1px" color="white" WebkitTextStroke="5px black">
          Skills
        </Heading>
      </Center>
    </Section>
  );
};

const SkillTag: React.FC<{ skill: Skill }> = ({ skill }) => {
  const weight = React.useMemo(() => {
    if (skill.size < 8) return 800;
    return 900;
  }, [skill.size]);
  return (
    // <Popover trigger="hover">
    //   <PopoverTrigger>
    <Center
      as="span"
      //   h={`${skill.size * 2 + 16}px`}
      py={1}
      key={skill.name}
      borderWidth={2}
      borderColor="black"
      //   borderColor="gray.800"
      bgColor="white"
      px={2}
      mx={2}
      _hover={{
        bgColor: 'gray.800',
        color: 'white',
        borderColor: 'transparent',
      }}
    >
      <Text fontFamily={fonts.raleway} fontWeight={weight} fontSize={`${skill.size * 1.5 + 8}px`}>
        {skill.name}
      </Text>
    </Center>
    //   </PopoverTrigger>
    //   <PopoverContent borderWidth={2} borderColor="black" borderRadius={0}>
    //     <PopoverArrow />
    //     {/* <PopoverCloseButton /> */}
    //     <PopoverHeader fontFamily={fonts.spartan} fontWeight={600} fontSize="lg" textAlign="center">
    //       {skill.name}
    //     </PopoverHeader>
    //     <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
    //   </PopoverContent>
    // </Popover>
  );
};
