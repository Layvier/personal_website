import * as React from "react";
import { Box, Text, VStack, HStack, Link, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Section } from "./Section";
import { SectionIds } from "../../pages";
import { StylizedBox } from "../StylizedBox";
import QuoteIcon from "../../images/quote.svg";
import Github from "../../images/Github.svg"
import LinkedIn from "../../images/LinkedIn.svg"
import Twitter from "../../images/Twitter.svg"

interface SocialLink {
  image: any,
  href: string,
}

const email = "hi@olivierramier.xyz"

const socialLinks: SocialLink[] = [
  {
    image: LinkedIn,
    href: "#"
  },
  {
    image: Github,
    href: "#"
  },
  {
    image: Twitter,
    href: "#"
  },
]

export const ContactSection: React.FC<{}> = () => {
  return (
    <Section
      sectionId={SectionIds.contact}
      pl={0}
      pr={0}
      pt={["50px", "100px"]}
      pb={["50px", "120px"]}
    >
        <Text
          as="h2"
          fontSize={["24px", "62px"]}
          mb={["15px", "30px"]}
          alignSelf="center"
          fontWeight="700"
          color="teal-light"
        >
          {email}
        </Text>
        <Flex gridGap={[4, 8]} justify="center" align="center">
          {socialLinks.map(link => (
            <Link href={link.href}>
              <Image
                src={link.image}
                width={["24px", "44px"]}
                transition="transform .15s ease"
                _hover={{ transform: "scale(115%)" }}
              />
            </Link>
          ))}
        </Flex>
        <Text alignSelf="center" as="h5" textStyle="h5" color="white" mt={12}>
          © 2022 Olivier Ramier
        </Text>
    </Section>
  );
};
