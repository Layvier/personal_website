import * as React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GreenThing from "../../images/green-thing.svg";
import GreenThingMobile from "../../images/green-thing-mobile.svg";
import BlackBackground from "../../images/black-bg.png";

export const HeroSection: React.FC<{}> = () => {
  return (
    <Box
      bgImage={BlackBackground}
      bgSize="cover"
    >
      <Box
        bgImage={[GreenThingMobile, GreenThing]}
        bgPos={["center 30%", "center top"]}
        height={["100vh"]}
        bgRepeat="no-repeat"
        bgSize="cover"
        px={[22, 81]}
        py={75}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text color="white" as="h1" textStyle="h1">
          Olivier<br/>Ramier
        </Text>
        <Box>
          <Text color="white" as="h4" textStyle="h4">
            Consulting
          </Text>
          <Text color="white" as="h4" textStyle="h4">
            Building Stuff (Checkout <Link color="lighter-teal" href="#">Mapedia</Link>)
          </Text>
          <Text color="white" as="h4" textStyle="h4">
              Fullstack Software Development
          </Text>
        </Box>
      </Box>
    </Box>
  )
};