import { Divider, Flex, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/layout';
import * as React from 'react';
import { SectionIds } from '../../pages';
import { Section } from './Section';

interface WorkExperience {
  companyName: string;
  dates: [string, string];
  jobTitle: string;
  description: string;
  bulletPoints: string[];
}

const workExperiences: WorkExperience[] = [
  {
    companyName: 'Entrepreneur First',
    jobTitle: 'Cohort Member',
    description: "Joined Entrepreneur First Berlin's 5th cohort",
    bulletPoints: [
      'Formed several teams following Entrepreneur First’s cofounder matching framework',
      'Went through ideation, market research and customer development phases',
    ],
    dates: ['April 2020', 'June 2020'],
  },
  {
    companyName: 'Forto',
    jobTitle: 'Software Engineer',
    description:
      'Backend software engineer (Node.js/Typescript) for a digital freight forwarder startup with event-driven microservice architecture',
    bulletPoints: [
      'Designed and implemented core features for product demos, client side reporting and user management',
      'Contributed to the hiring process, by interviewing and evaluating candidates',
      'Coordinated a team of 3 people in charge of the customer facing platform',
      'Designed and implemented an MVP for a distributed tracing system',
      'Designed, implemented and maintained multiple micro-services related to the customer facing platform and rate management',
    ],
    dates: ['Mar 2018', 'Mar 2020'],
  },
  {
    companyName: 'Kreatize',
    jobTitle: 'Junior Software Engineer',
    description:
      'FullStack JavaScript development in a web start-up offering a SaaS solution to manufacturing companies',
    bulletPoints: [
      'Migrated the platform from Laravel and JQuery to Hapi.js and Vue.js',
      "Designed, implemented and maintained the company's public API",
      'Designed and implemented development tooling for API testing',
    ],
    dates: ['Nov 2017', 'Jan 2018'],
  },
];
export const WorkExperienceSection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.section2} bgColor="gray.800" pt={24} pb={16} position="relative">
      <Stack spacing={16} zIndex={2}>
        {workExperiences.map(workExperience => (
          <WorkExperienceBlock workExperience={workExperience} />
        ))}
      </Stack>
      <Flex pt={20} direction="column">
        <Heading color="gray.200" fontWeight={300} fontSize="7xl">
          Previously
        </Heading>
        <Divider borderWidth={2} borderColor="gray.200" opacity={1} mt={2} />
      </Flex>
    </Section>
  );
};

const WorkExperienceBlock: React.FC<{ workExperience: WorkExperience }> = ({ workExperience }) => {
  return (
    <Flex direction="row" alignItems="stretch">
      <Flex minW="300px" maxW="300px" direction="column" alignItems="flex-end">
        <Heading textAlign="right" color="white">
          {workExperience.companyName}
        </Heading>
      </Flex>
      <Stack pl={4} flexGrow={1} pr={5} mt={1}>
        <Text color="white" fontWeight={600}>
          {workExperience.description}
        </Text>
        <UnorderedList spacing={1} fontSize="xs" stylePosition="inside">
          {workExperience.bulletPoints.map(bulletPoint => (
            <ListItem color="white">{bulletPoint}</ListItem>
          ))}
        </UnorderedList>
      </Stack>
      <Flex w="200px" justifyContent="flex-end" alignItems="center">
        <Text color="white" fontWeight={600} textAlign="center">
          {workExperience.dates[0]}
          <br />
          -
          <br />
          {workExperience.dates[1]}
        </Text>
      </Flex>
    </Flex>
  );
};
