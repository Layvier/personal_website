import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import { SectionIds } from "../../pages";
import { fonts } from "../../theme";
import { Underlined } from "../Underlined";
import { Section } from "./Section";
// @ts-ignore
import ProfilePicture from "../../images/brick_wall_800px.jpg";

const desktopBreakpoint = "lg";

const leftPadding = 10;

export const AboutMeSection: React.FC<{}> = () => {
  return (
    <Section
      sectionId="section1"
      bgColor="gray.100"
      minH="100vh"
      py={{ base: 6, md: 12 }}
    >
      <Flex direction="column" alignItems="stretch" flexGrow={1}>
        <Center mb={10} flexDirection={{ base: "column", md: "row" }}>
          <Heading
            fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
            color="onyx"
            opacity={1}
            letterSpacing={{ base: 5, md: 8, lg: 12 }}
          >
            Olivier
          </Heading>
          <Stack alignItems="center" spacing={10}>
            <Image
              objectFit="fill"
              borderRadius="50%"
              mx={8}
              minW="140px"
              boxSize="140px"
              src={ProfilePicture}
              alt="Olivier Ramier"
              opacity={0.94}
              flexShrink={0}
            />
          </Stack>
          <Heading
            fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
            color="onyx"
            opacity={1}
            letterSpacing={{ base: 5, lg: 12 }}
          >
            Ramier
          </Heading>
        </Center>

        <Flex
          direction="column"
          fontFamily={fonts.spartan}
          alignItems="stretch"
          justifyContent="center"
          px={{ base: 2, sm: 8, md: "15%" }}
          fontSize="lg"
        >
          <Text mb={8} overflow="clip" fontSize="lg" textAlign="center">
            I'm a french <Underlined>freelance software engineer</Underlined>{" "}
            living in Berlin, passionate about the web, technology and learning.
          </Text>
          <Center flexDirection="column">
            <Flex w="100%" alignItems="center" mb={2}>
              <Divider borderColor="onyx" />
              <Text
                mx={4}
                fontWeight={800}
                color="onyx"
                fontStyle="underlined"
                flexGrow={1}
                textOverflow="initial"
                whiteSpace="nowrap"
              >
                My jam
              </Text>
              <Divider borderColor="onyx" />
            </Flex>
            <Text ml={6}>
              <Text as="span" fontWeight={600} color="opal">
                Building stuff
              </Text>{" "}
              (checkout{" "}
              <ScrollLink
                activeClass="active_section_link"
                to={SectionIds.projects}
                spy={true}
                smooth={true}
                duration={600}
              >
                <Link as="span" color="baby-blue-eyes" fontWeight={600}>
                  Sci-Map
                </Link>
              </ScrollLink>
              )
            </Text>
            <Text ml={6}>
              <Text as="span" fontWeight={600} color="opal">
                Freelance services
              </Text>{" "}
              in fullstack software development and consulting.
            </Text>
          </Center>
        </Flex>
      </Flex>
      <Flex
        pt={24}
        pb={20}
        direction={{ base: "column", [desktopBreakpoint]: "row" }}
      >
        <Stack>
          <Heading
            mr={3}
            fontWeight={400}
            fontSize={{ base: "5xl", lg: "6xl" }}
          >
            About Me
          </Heading>
          <Stack
            direction="column"
            fontWeight={300}
            fontSize="lg"
            pl={leftPadding}
          >
            <Text>
              Growing up in the South West of France, I quickly got hooked by
              the web and started programming at 11. Later on, I graduated from{" "}
              <Underlined fontWeight={600}>IMT Atlantique</Underlined> with an
              engineering degree in{" "}
              <Underlined fontWeight={600}>
                mathematical optimization
              </Underlined>
              , a field leveraging applied mathematics, graph theory and
              algorithms to solve NP-complete problems, particularly found in
              logistics.
            </Text>
            <Text>
              I moved to Berlin in 2016 to work in startups and see the
              challenges they face from the inside. I worked at{" "}
              <Underlined fontWeight={600}>Kreatize</Underlined> and{" "}
              <Underlined fontWeight={600}>Forto</Underlined> as software
              engineer, where I learned a wide range of technologies and
              methodologies.
            </Text>
            <Text>
              In 2020 I started my self-employed journey and I now alternate
              between working on personal projects and freelancing.
            </Text>

            <Text>
              As a{" "}
              <Underlined fontWeight={600}>
                tech generalist and pragmatic problem solver
              </Underlined>
              , I focus on finding innovative solutions to real world problems
              by combining diverse technologies and applying proven
              methodologies.
            </Text>
          </Stack>
        </Stack>
        <Center
          pt={{ base: 10, [desktopBreakpoint]: 0 }}
          px={{ base: 0, [desktopBreakpoint]: 10 }}
        >
          <FreelanceServicesBlock />
        </Center>
      </Flex>
      <TestimonialsBlock />
    </Section>
  );
};

const FreelanceServicesBlock: React.FC<{}> = ({}) => {
  return (
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
          <Text fontWeight={800} textAlign="center" mt={3} pb={1}>
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
  );
};

const testimonials: {
  from: string;
  role: string;
  companyName: string;
  companyUrl: string;
  message: string;
}[] = [
  {
    from: "Dimitri Page",
    role: "Product Manager",
    companyName: "Wonder",
    companyUrl: "https://wonder.me/",
    message: `It was a pleasure to work with Olivier. He worked diligently to make sure that features were truly complete and had a very pro-active attitude to reaching out in order to align with his stakeholders. 
    During discovery ideations he came up with loads of great concept that just show how much he was thinking about the product. Last but not least, he was fun to work with.
    I'm sad to see him go and would recommend him without any hesitation.`,
  },
  {
    from: "Benjamin Dumke-von der Ehe",
    role: "Engineering Manager",
    companyName: "Wonder",
    companyUrl: "https://wonder.me/",
    message: `Working with Olivier was a pleasure. In the four months that he was with us, he integrated well into the team and the whole organization. He has a keen eye for the product and the users' concerns, and with his technical skills he made many valuable contributions to our codebase at an exciting time for our company. Last but certainly not least, Olivier is a very approachable and friendly person.`,
  },
  {
    from: "Stuart Johnson",
    role: "CTO",
    companyName: "Simple Construction Ltd",
    companyUrl: "https://www.simpleconstruction.tech/",
    message:
      "Olivier is scrappy, startup-minded, efficient, talented, versatile, and very easy to work with. I'd hire him again in a heartbeat, and you should too.",
  },
];
export const TestimonialsBlock: React.FC<{}> = ({}) => {
  return (
    <Flex direction="column">
      <Heading mb={6} fontWeight={400} fontSize={{ base: "4xl", lg: "5xl" }}>
        Testimonials
      </Heading>
      <Wrap
        pb={6}
        pl={leftPadding}
        justify="center"
        spacing={16}
        alignItems={{ base: "flex-start", [desktopBreakpoint]: "center" }}
        fontStyle="italic"
      >
        {testimonials.map((testimonial) => (
          <WrapItem maxW="400px">
            <Stack
              alignItems="flex-start"
              spacing={{ base: 2, [desktopBreakpoint]: 6 }}
              mb={{ base: 12, [desktopBreakpoint]: 0 }}
            >
              <Text textAlign="justify" fontSize="sm">
                "{testimonial.message}"
              </Text>
              <Text color="onyx">
                <Text as="span" fontWeight={600}>
                  {testimonial.from}
                </Text>
                ,{" "}
                <Text as="span" fontWeight={600}>
                  {testimonial.role}
                </Text>{" "}
                at{" "}
                <Link
                  fontWeight={600}
                  color="onyx"
                  href={testimonial.companyUrl}
                  isExternal
                >
                  {testimonial.companyName}
                </Link>
              </Text>
            </Stack>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};
