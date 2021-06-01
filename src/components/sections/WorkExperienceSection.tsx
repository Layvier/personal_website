import { Center, Text } from '@chakra-ui/layout';
import * as React from 'react';
import { SectionIds } from '../../pages';
import { Underlined } from '../Underlined';
import { Section } from './Section';

export const WorkExperienceSection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.section2} bgColor="gray.800">
      <Center h="100%">
        <Text fontSize="xl" color="gray.100">
          Freelance <Underlined>software</Underlined> engineer
        </Text>
      </Center>
    </Section>
  );
};
