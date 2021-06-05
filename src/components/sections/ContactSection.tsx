import { Center, Heading, Stack, Text } from '@chakra-ui/layout';
import { SectionIds } from '../../pages';
import { Section } from './Section';
import * as React from 'react';
import { Link } from '../Link';
import { AiOutlineGithub } from '@react-icons/all-files/ai/AiOutlineGithub';
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin';
import { AiOutlineTwitter } from '@react-icons/all-files/ai/AiOutlineTwitter';
import Icon from '@chakra-ui/icon';

export const ContactSection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.contact} minH="300px" bgColor="gray.850">
      <Center
        w="100%"
        flexGrow={1}
        py={5}
        color="gray.150"
        fontWeight={800}
        fontSize="lg"
        letterSpacing={1}
        flexDirection="column"
      >
        <Stack direction="row" alignItems="baseline" spacing={8}>
          <Link href="mailto:hi@olivierramier.xyz" isExternal mt={4}>
            <Heading color="baby-blue-eyes">hi@olivierramier.xyz</Heading>
          </Link>
        </Stack>
        <Stack direction="row" spacing={12} mt={8}>
          <Link color="almond" href="https://twitter.com/olivier_ramier" isExternal>
            <Icon as={AiOutlineTwitter} boxSize={7} _hover={{ color: 'white' }} transition="color 200ms" />
          </Link>
          <Link color="almond" href="https://www.linkedin.com/in/olivier-ramier/" isExternal>
            <Icon as={AiOutlineLinkedin} boxSize={7} _hover={{ color: 'white' }} transition="color 200ms" />
          </Link>
          <Link color="almond" href="https://github.com/Layvier" isExternal>
            <Icon as={AiOutlineGithub} boxSize={7} _hover={{ color: 'white' }} transition="color 200ms" />
          </Link>
        </Stack>
        <Text fontSize="sm" mt={16}>
          © {new Date().getFullYear()} Olivier Ramier
        </Text>
      </Center>
    </Section>
  );
};
