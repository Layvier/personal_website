import { Box, Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import * as React from 'react';
import { fonts } from '../../theme';
import { Underlined } from '../Underlined';
import { Section } from './Section';

export const AboutMeSection: React.FC<{}> = () => {
  return (
    <Section sectionId="section1" bgColor="gray.150" minH="200vh" px={20}>
      <Flex direction="row" alignItems="stretch" flexGrow={1} py={10}>
        <Center w="40%">
          <Stack alignItems="center" spacing={10}>
            <Flex bgColor="gray.500" boxSize="200px" boxShadow="lg" borderRadius="100%"></Flex>
            <Heading color="gray.800" size="2xl" fontFamily={fonts.spartan} fontWeight={400}>
              Olivier Ramier
            </Heading>
          </Stack>
        </Center>

        <Flex direction="column" py={20} fontFamily={fonts.spartan}>
          <Text fontSize="xl" mb={8} overflow="clip">
            I'm a french <Underlined>software engineer</Underlined> living in Berlin, passionate about the web,
            technology and learning.
          </Text>
          <Box>
            <Text fontSize="2xl" fontWeight={800} color="gray.750" fontStyle="underlined">
              My jam:
            </Text>
            <Text fontSize="xl" ml={6}>
              Building stuff (checkout{' '}
              <Link color="baby-blue-eyes" fontWeight={600}>
                Sci-Map
              </Link>
              )
            </Text>
            <Text fontSize="xl" ml={6}>
              Freelance services in software development and consulting.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex p={20} direction="row">
        <Text>
          My background, what I like, what I’m passionate about Engineering, coming from applied mathematics /
          algorithms optimization, designing models and algorithms to solve NP-complex problems Software engineering,
          full stack Software engineering
        </Text>
      </Flex>
    </Section>
  );
};
