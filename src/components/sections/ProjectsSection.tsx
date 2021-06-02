import { Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import * as React from 'react';
import { SectionIds } from '../../pages/index';
import { Section } from './Section';

export const ProjectsSection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.projects} bgColor="gray.50" py={10}>
      <Flex>
        <Stack spacing={5}>
          <Heading color="teal.500">Sci-Map.org - The entry point to learn anything</Heading>
          <Text>
            Sci-Map is an open, collaborative learning map to explore knowledge intuitively, and find the best learning
            materials for any subject. Leveraging graph databases technology enables a precise mapping of concepts
            between each other, representating the knowledge space as a graph and indexing any learning material in it
            based on its prerequisites and the covered topics. This allows serving those learning materials at the right
            time for the user.{' '}
          </Text>
          <Text fontStyle="italic">
            Very experimental, provide a new way to consume knowledge, remove learning blockers. I had the idea of this
            project a long time ago,
            {/* Status of the project:  */}
            {/* Great learning */}
            {/* Mission */}
          </Text>

          <Text>
            <Text fontWeight={800} as="span">
              Tech stack:
            </Text>{' '}
            <Text fontStyle="italic" color="gray.700" as="span">
              Node.js, TypeScript, Neo4j, React, Apollo Cient/Server, Chakra UI
            </Text>
          </Text>
          <Link href="https://github.com/sci-map-org/" color="baby-blue-eyes">
            Github
          </Link>
        </Stack>
      </Flex>
    </Section>
  );
};
