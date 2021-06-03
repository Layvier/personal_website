import { Box, Center, Divider, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import * as React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { SectionIds } from '../../pages';
import { fonts } from '../../theme';
import { Underlined } from '../Underlined';
import { Section } from './Section';

export const AboutMeSection: React.FC<{}> = () => {
  return (
    <Section sectionId="section1" bgColor="gray.100" minH="200vh">
      {/* <ParticlesBackground /> */}
      <Flex direction="row" alignItems="stretch" flexGrow={1} py={10}>
        <Flex w="40%" py="10%">
          <Stack alignItems="center" spacing={10}>
            <Flex bgColor="gray.500" boxSize="200px" boxShadow="lg" borderRadius="100%"></Flex>
            <Heading color="gray.800" size="2xl" fontFamily={fonts.spartan} fontWeight={400}>
              Olivier Ramier
            </Heading>
          </Stack>
        </Flex>

        <Flex direction="column" py={20} fontFamily={fonts.spartan}>
          <Text fontSize="xl" mb={8} overflow="clip">
            I'm a french <Underlined>software engineer</Underlined> living in Berlin, passionate about the web,
            technology and learning.
          </Text>
          <Box>
            <Text fontSize="2xl" fontWeight={800} color="gray.750" fontStyle="underlined" mb={3}>
              My jam:
            </Text>
            <Text fontSize="xl" ml={6}>
              {'=> '}Building stuff (checkout{' '}
              <ScrollLink
                activeClass="active_section_link"
                to={SectionIds.projects}
                spy={true}
                smooth={true}
                duration={600}
              >
                <Link color="baby-blue-eyes" fontWeight={600}>
                  Sci-Map
                </Link>
              </ScrollLink>
              )
            </Text>
            <Text fontSize="xl" ml={6}>
              {'=> '}Freelance services in software development and consulting.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex py={20} direction="row">
        <Heading mr={3} fontWeight={500}>
          About Me
        </Heading>
        <Stack direction="column" fontWeight={300} fontSize="lg">
          <Text>
            Growing up in the South West of France, I quickly got hooked by the web and started programming at 11. Later
            on, I graduated from <Underlined fontWeight={600}>IMT Atlantique</Underlined> with an angineering degree in{' '}
            <Underlined fontWeight={600}>mathematical optimization</Underlined>, a field leveraging applied mathematics,
            graph theory and algorithms to solve NP-complete problems, particularly found in logistics.
          </Text>
          <Text>
            I moved to Berlin in 2016 to work in startups and see the challenges they face from the inside. I worked at{' '}
            <Underlined fontWeight={600}>Kreatize</Underlined> and <Underlined fontWeight={600}>Forto</Underlined> as
            software engineer, where I learned a wide range of technologies and methodologies.
          </Text>
          <Text>
            In 2020 I started my self-employed journey and I now alternate between working on personal projects and
            freelancing.
          </Text>
          {/* Through these personal projects I aim to improve my skills across all the
          phases of the product development process, such as UI/UX design or growth. */}

          <Text>
            As a <Underlined fontWeight={600}>tech generalist</Underlined> and pragmatic{' '}
            <Underlined fontWeight={600}>problem solver</Underlined>, I focus on finding innovative solutions to real
            world problems by combining diverse technologies and applying proven methodologies.
          </Text>
        </Stack>

        <Flex px={10}>
          <Box position="relative" boxSize="330px">
            <Flex
              boxSize="300px"
              borderRadius={2}
              bgColor="onyx"
              zIndex={5}
              position="absolute"
              direction="column"
              alignItems="stretch"
              px={3}
            >
              <Center flexDirection="column" color="white">
                <Text fontWeight={800} textAlign="center" my={3}>
                  Freelance services
                </Text>
                <Stack spacing={1} fontWeight={500} fontSize="sm" textAlign="center">
                  <Text>API design and development</Text>
                  <Text>Web App development</Text>
                  <Text>Data model design (DDD)</Text>
                  <Text>Software Architecture consulting</Text>
                  <Text>Prototyping - POC development</Text>
                </Stack>
              </Center>
              <Center flexGrow={1} mx="30%">
                <Divider borderColor="white" />
              </Center>
              <Center flexDirection="column" mb={3}>
                <Text fontWeight={800} color="white" textAlign="center" mb={1}>
                  Favourite stack
                </Text>
                <Stack spacing={1} fontSize="sm" alignItems="center">
                  <Text color="white">Typescript - Node.js - GraphQl - React</Text>
                </Stack>
              </Center>
            </Flex>
            <Box
              boxSize="300px"
              borderRadius={2}
              bgColor="baby-blue-eyes"
              position="absolute"
              top="30px"
              left="30px"
              zIndex={3}
            ></Box>
          </Box>
        </Flex>
      </Flex>
    </Section>
  );
};
