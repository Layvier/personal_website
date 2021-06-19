import { Box, Center, Heading, Text, Wrap, WrapItem } from '@chakra-ui/layout';
import { Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import * as React from 'react';
import { fonts } from '../../theme';
import { Link } from '../Link';
import { Section } from './Section';

interface Skill {
  name: string;
  size: number; // between 1 and 10
  popoverContent: string;
  seeMoreLink?: string;
}
const skills: Skill[] = [
  {
    name: 'TypeScript',
    size: 10,
    popoverContent:
      '<span class="searchmatch">TypeScript</span> is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/TypeScript',
  },
  {
    name: 'React.js',
    size: 9,
    popoverContent:
      '<span class="searchmatch">React</span> (also known as <span class="searchmatch">React.js</span> or <span class="searchmatch">React</span><span class="searchmatch">JS</span>) is an open-source front-end JavaScript library for building user interfaces or UI components.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/React%20(JavaScript%20library)',
  },
  {
    name: 'Domain Driven Design',
    size: 8,
    popoverContent:
      '<span class="searchmatch">Domain</span>-<span class="searchmatch">driven</span> <span class="searchmatch">design</span> (DDD) is the concept that the structure and language of software code (class names, class methods, class variables) should match the business domain.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Domain-driven%20design',
  },
  {
    name: 'D3.js',
    size: 4,
    popoverContent:
      '<span class="searchmatch">D3.js</span> is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of Scalable Vector Graphics, HTML5, and Cascading Style Sheets standards.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/D3.js',
  },
  {
    name: 'Node.js',
    size: 9,
    popoverContent:
      '<span class="searchmatch">Node.js</span> is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Node.js',
  },
  {
    name: 'Neo4j',
    size: 7,
    popoverContent:
      '<span class="searchmatch">Neo4j</span> is the world\'s leading open source Graph Database which is developed using Java technology. It is highly scalable and schema free (NoSQL).',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Neo4j',
  },
  {
    name: 'PostgreSQL',
    size: 6,
    popoverContent:
      '<span class="searchmatch">PostgreSQL</span>, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/PostgreSQL',
  },
  {
    name: 'MySQL',
    size: 7,
    popoverContent:
      '<span class="searchmatch">MySQL</span> is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/MySQL',
  },
  {
    name: 'MongoDb',
    size: 8,
    popoverContent:
      '<span class="searchmatch">MongoDB</span> is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/MongoDB',
  },
  {
    name: 'Python',
    size: 5,
    popoverContent:
      '<span class="searchmatch">Python</span> is an interpreted high-level general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant indentation.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
  },
  {
    name: 'GraphQl',
    size: 9,
    popoverContent:
      '<span class="searchmatch">GraphQL</span> is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/GraphQL',
  },
  {
    name: 'Apollo Server',
    size: 9,
    popoverContent:
      '<span class="searchmatch">Apollo Server</span> is an open-source, spec-compliant GraphQL server that\'s compatible with any GraphQL client, including Apollo Client.',
    seeMoreLink: 'https://www.apollographql.com/docs/apollo-server/',
  },
  {
    name: 'Apollo Client',
    size: 9,
    popoverContent:
      '<span class="searchmatch">Apollo Client</span> is a comprehensive state management library for JavaScript that enables developers to manage both local and remote data with GraphQL. It is used to fetch, cache, and modify application data, all while automatically updating the UI.',
    seeMoreLink: 'https://www.apollographql.com/docs/react/',
  },
  {
    name: 'Operations Research',
    size: 8,
    popoverContent:
      '<span class="searchmatch">Operations research</span>, often shortened to the initialism OR, is a discipline that deals with the application of advanced analytical methods to help make better decisions.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Operations%20research',
  },
  {
    name: 'Graph Theory',
    size: 8,
    popoverContent:
      '<span class="searchmatch">Graph</span> <span class="searchmatch">theory</span> is the study of <span class="searchmatch">graphs</span>, which are mathematical structures used to model pairwise relations between objects.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Graph%20theory',
  },
  {
    name: 'JavaScript',
    size: 9,
    popoverContent:
      '<span class="searchmatch">JavaScript</span>, often abbreviated as JS, is a high-level programming language, often just-in-time compiled, and multi-paradigm. It is the language of the web as it runs on any browser.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/JavaScript',
  },
  {
    name: 'Object Oriented Programming',
    size: 8,
    popoverContent:
      '<span class="searchmatch">Object</span>-<span class="searchmatch">oriented</span> <span class="searchmatch">programming</span> (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Object-oriented%20programming',
  },
  {
    name: 'Functional Programming',
    size: 8,
    popoverContent:
      '<span class="searchmatch">functional</span> <span class="searchmatch">programming</span> is a declarative programming paradigm where programs are constructed by applying and composing functions.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Functional%20programming',
  },
  {
    name: 'Software Architecture',
    size: 7,
    popoverContent:
      '<span class="searchmatch">Software</span> <span class="searchmatch">architecture</span> refers to the fundamental structures of a software system and the discipline of creating such structures and systems.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Software%20architecture',
  },
  {
    name: 'Microservices',
    size: 7,
    popoverContent:
      'In a <span class="searchmatch">microservices</span> architecture, services are fine-grained and the protocols are lightweight.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Microservices',
  },
  {
    name: 'AWS',
    size: 5,
    popoverContent:
      'Amazon Web Services (<span class="searchmatch">AWS</span>) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Amazon%20Web%20Services',
  },
  {
    name: 'Stochastic Programming',
    size: 7,
    popoverContent:
      'In optimization, <span class="searchmatch">stochastic</span> <span class="searchmatch">programming</span> is a framework for modeling optimization problems that involve uncertainty.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Stochastic%20programming',
  },
  {
    name: 'Probabilistic Programming',
    size: 5,
    popoverContent:
      '<span class="searchmatch">Probabilistic</span> <span class="searchmatch">programming</span> (PP) is a programming paradigm in which probabilistic models are specified and inference for these models is performed automatically.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Probabilistic%20programming',
  },
  {
    name: 'Next.js',
    size: 8,
    popoverContent:
      '<span class="searchmatch">Next</span>.<span class="searchmatch">js</span> is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Next.js',
  },
  {
    name: 'UI Design',
    size: 5,
    popoverContent:
      '<span class="searchmatch">User interface (UI) design</span> or user interface engineering is the design of user interfaces for machines and software.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/User%20interface%20design',
  },
  {
    name: 'UX Design',
    size: 5,
    popoverContent:
      '<span class="searchmatch">User experience design</span> is the process of supporting user behavior through usability, usefulness, and desirability provided in the interaction with a product.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/User%20experience%20design',
  },
  {
    name: 'Figma',
    size: 5,
    popoverContent:
      '<span class="searchmatch">Figma</span> is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Figma%20(software)',
  },
  {
    name: 'Elixir',
    size: 6,
    popoverContent:
      '<span class="searchmatch">Elixir</span> is a dynamic, functional language for building scalable and maintainable applications. Elixir leverages the Erlang VM, known for running low-latency, distributed, and fault-tolerant systems.',
    seeMoreLink: 'https://elixir-lang.org/',
  },
  {
    name: 'Vue.js',
    size: 7,
    popoverContent:
      '<span class="searchmatch">Vue.js</span> is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/Vue.js',
  },
  {
    name: 'Chakra UI',
    size: 7,
    popoverContent:
      '<span class="searchmatch">Chakra UI</span> is a simple, modular and accessible component library that gives developers the building blocks they need to build React applications.',
    seeMoreLink: 'https://chakra-ui.com/',
  },
  {
    name: 'HTML',
    size: 8,
    popoverContent:
      'The <span class="searchmatch">HyperText Markup Language</span>, or <span class="searchmatch">HTML</span> is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
    seeMoreLink: 'https://en.wikipedia.org/wiki/HTML',
  },
  {
    name: 'CSS',
    size: 8,
    popoverContent:
      '<span class="searchmatch">Cascading Style Sheets</span> (<span class="searchmatch">CSS</span>) is a style sheet language used for describing the presentation of a document written in a markup language such as <span class="searchmatch">HTML</span>. <span class="searchmatch">CSS</span> is a cornerstone',
    seeMoreLink: 'https://en.wikipedia.org/wiki/CSS',
  },
];

export const SkillsSection: React.FC<{}> = () => {
  return (
    <Section sectionId="section3" minH="100vh" bgColor="onyx">
      <Center mt={20}>
        <Heading fontSize="7xl" fontWeight={800} color="white">
          Skills
        </Heading>
      </Center>
      <Center>
        <Box maxW="850px" mt={12} mb={20}>
          <Wrap spacing="10px" justify="center" align="center">
            {skills.map(skill => (
              <WrapItem key={skill.name}>
                <SkillTag skill={skill} />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
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
    <Popover trigger="hover">
      <PopoverTrigger>
        <Center
          as="span"
          py={1}
          key={skill.name}
          borderWidth={2}
          borderColor="black"
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
      </PopoverTrigger>
      <PopoverContent borderWidth={2} borderColor="black" borderRadius={0}>
        <PopoverArrow />
        <PopoverHeader fontFamily={fonts.spartan} fontWeight={600} fontSize="lg" textAlign="center">
          {skill.name}
        </PopoverHeader>
        <PopoverBody>
          <Text dangerouslySetInnerHTML={{ __html: skill.popoverContent }}></Text>
          {skill.seeMoreLink && (
            <Link fontWeight={600} href={skill.seeMoreLink} isExternal float="right">
              More <ExternalLinkIcon />
            </Link>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
