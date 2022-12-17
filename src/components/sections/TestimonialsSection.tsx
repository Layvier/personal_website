import * as React from "react";
import { Box, Text, VStack, HStack, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Section } from "./Section";
import { SectionIds } from "../../pages";
import { StylizedBox } from "../StylizedBox";
import QuoteIcon from "../../images/quote.svg";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  workplace: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 0,
    text: "It was a pleasure to work with Olivier. He worked diligently to make sure that features were truly complete and had a very pro-active attitude to reaching out in order to align with his stakeholders. During discovery ideations he came up with loads of great concept that just show how much he was thinking about the product. Last but not least, he was fun to work with. I'm sad to see him go and would recommend him without any hesitation.",
    author: "Dimitri Page",
    position: "Product Manager",
    workplace: "Wonder",
  },
  {
    id: 1,
    text: "Working with Olivier was a pleasure. In the four months that he was with us, he integrated well into the team and the whole organization. He has a keen eye for the product and the users' concerns, and with his technical skills he made many valuable contributions to our codebase at an exciting time for our company. Last but certainly not least, Olivier is a very approachable and friendly person.",
    author: "Benjamin Dumke-von der Ehe",
    position: "Engineering Manager",
    workplace: "Wonder",
  },
  {
    id: 2,
    text: "Olivier is scrappy, startup-minded, efficient, talented, versatile, and very easy to work with. I'd hire him again in a heartbeat, and you should too.",
    author: "Stuart Johnson",
    position: "CTO",
    workplace: "Simple Construction Ltd",
  },
];

export const TestimonialsSection: React.FC<{}> = () => {
  return (
    <Section sectionId={SectionIds.testimonials}>
      <Text color="white" as="h2" textStyle="h2" mb={[10, 12, 16]}>
        Testimonials
      </Text>
      <VStack spacing={["40px", "60px"]} pb={[10, 16]} align="stretch">
        {testimonialsData.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </VStack>
    </Section>
  );
};

const Testimonial: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <StylizedBox borderColor="teal-light">
      <Box display="flex" flexDirection="column" alignItems="end" color="white">
        <HStack align="start" w="100%">
          <Image src={QuoteIcon} width={[8, 12]} mr={2} />
          <Text as="p" textStyle="p2">
            {testimonial.text}
          </Text>
        </HStack>
        <Text
          as="h5"
          textStyle="h5"
          textTransform="uppercase"
          textAlign="end"
          mt={8}
        >
          {testimonial.author}, {testimonial.position} at{" "}
          <Link href="#" color="violet">
            {testimonial.workplace}
          </Link>
        </Text>
      </Box>
    </StylizedBox>
  );
};
