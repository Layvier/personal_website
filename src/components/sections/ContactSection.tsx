import { Center, Heading, Stack, Text } from '@chakra-ui/layout';
import { SectionIds } from '../../pages';
import { Section } from './Section';
import * as React from 'react';
import { Link } from '../Link';

export const ContactSection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.contact} minH="300px" bgColor="gray.850">
      <Center
        w="100%"
        flexGrow={1}
        py={4}
        color="gray.150"
        fontWeight={800}
        fontSize="lg"
        letterSpacing={1}
        flexDirection="column"
      >
        <Stack direction="row" alignItems="baseline" spacing={8}>
          <Link href="mailto:hi@olivierramier.xyz" isExternal>
            <Heading color="baby-blue-eyes">hi@olivierramier.xyz</Heading>
          </Link>
        </Stack>
        <Stack direction="row" spacing={12} mt={12}>
          <Link color="almond" href="https://twitter.com/olivier_ramier" isExternal>
            Twitter
          </Link>
          <Link color="almond" href="https://www.linkedin.com/in/olivier-ramier/" isExternal>
            LinkedIn
          </Link>
          <Link color="almond" href="https://github.com/Layvier" isExternal>
            Github
          </Link>
        </Stack>
        <Text fontSize="sm" mt={12}>
          © {new Date().getFullYear()} Olivier Ramier
        </Text>
      </Center>
    </Section>
  );
};
