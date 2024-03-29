import * as React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/layout';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Image,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Divider,
} from '@chakra-ui/react';
import { Section } from './Section';
import { SectionIds } from '../../pages';
import PurpleThingTwo from '../../images/purple-thing.svg';

interface Skill {
  name: string;
  popoverContent: React.ReactNode;
  seeMoreLink?: string;
}

const skills: Skill[] = [
  {
    name: 'TypeScript',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          TypeScript
        </Text>{' '}
        is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of
        JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large
        applications and transcompiles to JavaScript.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/TypeScript',
  },
  {
    name: 'Deep Learning',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Deep learning
        </Text>{' '}
        is part of a broader family of machine learning methods based on artificial neural networks with representation
        learning. Learning can be supervised, semi-supervised or unsupervised.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Deep_learning',
  },
  {
    name: 'React.js',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          React
        </Text>{' '}
        (also known as{' '}
        <Text as="span" textStyle="skillTagHighlight">
          React.js
        </Text>{' '}
        or{' '}
        <Text as="span" textStyle="skillTagHighlight">
          React
        </Text>
        <Text as="span" textStyle="skillTagHighlight">
          JS
        </Text>
        ) is an open-source front-end JavaScript library for building user interfaces or UI components.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/React%20(JavaScript%20library)',
  },
  {
    name: 'Domain Driven Design',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Domain
        </Text>
        -
        <Text as="span" textStyle="skillTagHighlight">
          driven
        </Text>{' '}
        <Text as="span" textStyle="skillTagHighlight">
          design
        </Text>{' '}
        (DDD) is the concept that the structure and language of software code (class names, class methods, class
        variables) should match the business domain.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Domain-driven%20design',
  },
  {
    name: 'Node.js',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Node.js
        </Text>{' '}
        is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and
        executes JavaScript code outside a web browser.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Node.js',
  },
  {
    name: 'Graph databases (Neo4j)',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Neo4j
        </Text>{' '}
        is the world\'s leading open source Graph Database which is developed using Java technology. It is highly
        scalable and schema free (NoSQL).
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Neo4j',
  },
  {
    name: 'PostgreSQL',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          PostgreSQL
        </Text>
        , also known as Postgres, is a free and open-source relational database management system emphasizing
        extensibility and SQL compliance.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/PostgreSQL',
  },
  {
    name: 'MySQL',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          MySQL
        </Text>{' '}
        is an open-source relational database management system. Its name is a combination of "My", the name of
        co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/MySQL',
  },
  {
    name: 'MongoDb',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          MongoDB
        </Text>{' '}
        is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program,
        MongoDB uses JSON-like documents with optional schemas.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/MongoDB',
  },
  {
    name: 'Python',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Python
        </Text>{' '}
        is an interpreted high-level general-purpose programming language. Python\'s design philosophy emphasizes code
        readability with its notable use of significant indentation.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
  },
  {
    name: 'Natural language processing',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Natural language processing
        </Text>{' '}
        is the application of computational techniques to the analysis and synthesis of natural language and speech.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
  },
  {
    name: 'Operations Research',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Operations research
        </Text>
        , often shortened to the initialism OR, is a discipline that deals with the application of advanced analytical
        methods to help make better decisions.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Operations%20research',
  },
  {
    name: 'Statistics / Probabilites',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Statistics
        </Text>{' '}
        is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of
        data. In applying statistics to a scientific, industrial, or social problem, it is conventional to begin with a
        statistical population or a statistical model to be studied.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Statistics',
  },
  {
    name: 'Graph Theory',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Graph
        </Text>{' '}
        <Text as="span" textStyle="skillTagHighlight">
          theory
        </Text>{' '}
        is the study of{' '}
        <Text as="span" textStyle="skillTagHighlight">
          graphs
        </Text>
        , which are mathematical structures used to model pairwise relations between objects.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Graph%20theory',
  },
  {
    name: 'Object Oriented Programming',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Object
        </Text>
        -
        <Text as="span" textStyle="skillTagHighlight">
          oriented
        </Text>{' '}
        <Text as="span" textStyle="skillTagHighlight">
          programming
        </Text>{' '}
        (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Object-oriented%20programming',
  },
  {
    name: 'Functional Programming',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Functional
        </Text>{' '}
        <Text as="span" textStyle="skillTagHighlight">
          programming
        </Text>{' '}
        is a declarative programming paradigm where programs are constructed by applying and composing functions.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Functional%20programming',
  },
  {
    name: 'Software Architecture',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Software
        </Text>{' '}
        <Text as="span" textStyle="skillTagHighlight">
          architecture
        </Text>{' '}
        refers to the fundamental structures of a software system and the discipline of creating such structures and
        systems.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Software%20architecture',
  },
  {
    name: 'Microservices',
    popoverContent: (
      <>
        In a{' '}
        <Text as="span" textStyle="skillTagHighlight">
          microservices
        </Text>{' '}
        architecture, services are fine-grained and the protocols are lightweight.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Microservices',
  },
  {
    name: 'AWS',
    popoverContent: (
      <>
        Amazon Web Services (
        <Text as="span" textStyle="skillTagHighlight">
          AWS
        </Text>
        ) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies,
        and governments.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Amazon%20Web%20Services',
  },
  {
    name: 'Stochastic Programming',
    popoverContent: (
      <>
        In optimization,{' '}
        <Text as="span" textStyle="skillTagHighlight">
          stochastic
        </Text>{' '}
        <Text as="span" textStyle="skillTagHighlight">
          programming
        </Text>{' '}
        is a framework for modeling optimization problems that involve uncertainty.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Stochastic%20programming',
  },
  {
    name: 'Probabilistic Programming',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Probabilistic
        </Text>{' '}
        <Text as="span" textStyle="skillTagHighlight">
          programming
        </Text>{' '}
        (PP) is a programming paradigm in which probabilistic models are specified and inference for these models is
        performed automatically.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Probabilistic%20programming',
  },
  {
    name: 'Next.js',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Next
        </Text>
        .
        <Text as="span" textStyle="skillTagHighlight">
          js
        </Text>{' '}
        is an open-source React front-end development web framework created by Vercel that enables functionality such as
        server-side rendering.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/Next.js',
  },
  {
    name: 'UI Design',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          User interface (UI) design
        </Text>{' '}
        or user interface engineering is the design of user interfaces for machines and software.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/User%20interface%20design',
  },
  {
    name: 'UX Design',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          User experience design
        </Text>{' '}
        is the process of supporting user behavior through usability, usefulness, and desirability provided in the
        interaction with a product.
      </>
    ),
    seeMoreLink: 'https://en.wikipedia.org/wiki/User%20experience%20design',
  },
  {
    name: 'Elixir',
    popoverContent: (
      <>
        <Text as="span" textStyle="skillTagHighlight">
          Elixir
        </Text>{' '}
        is a dynamic, functional language for building scalable and maintainable applications. Elixir leverages the
        Erlang VM, known for running low-latency, distributed, and fault-tolerant systems.
      </>
    ),
    seeMoreLink: 'https://elixir-lang.org/',
  },
];

export const SkillsSection: React.FC<{}> = () => {
  return (
    <Box pos="relative">
      <Section sectionId={SectionIds.skills} w="100%">
        <Image
          src={PurpleThingTwo}
          pointerEvents="none"
          position="absolute"
          maxW={['400px', '500px', '800px']}
          top={['-200px', '-300px']}
          left={['-100px', '-25px']}
        />
        <Text as="h2" textStyle="h2" mt={16} mb={[8, 16]} alignSelf="end">
          Skills
        </Text>
        <Flex flexWrap="wrap" gridGap={[2, 4]} justifyContent="center">
          {skills.map(skill => (
            <SkillTag key={skill.name} skill={skill} />
          ))}
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
          role="button"
          px={[3, 5]}
          py={[1, 2]}
          bg="white"
          borderWidth={['2px', '3px']}
          borderColor="black"
          children={
            <Text as="h4" fontWeight="700" fontSize={['12px', '19px']}>
              {skill.name}
            </Text>
          }
          transition="all ease .2s"
          _hover={{
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'teal-light',
          }}
        />
      </PopoverTrigger>
      <PopoverContent outline="none">
        <PopoverArrow />
        <PopoverBody bg="black" borderWidth="3px" borderColor="teal-light" p={6}>
          <Flex direction="column" color="white">
            <Text as="h4" textStyle="h4">
              {skill.name}
            </Text>
            <Divider borderColor="teal-lighter" width="50px" borderWidth="2px" my={3} opacity={1} />
            <Text as="p" textStyle="p3" mb={4}>
              {skill.popoverContent}
            </Text>
            <Link target="_blank" href={skill.seeMoreLink} alignSelf="end">
              <Flex align="center" w="100%" justify="end" gridGap={2} color="teal-light">
                <Text as="h5" textStyle="h5">
                  More
                </Text>
                <Icon as={ExternalLinkIcon} />
              </Flex>
            </Link>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
