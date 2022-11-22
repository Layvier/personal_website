import * as React from "react";
import { Flex, BoxProps } from "@chakra-ui/layout";

export const StylizedBox: React.FC<BoxProps> = ({
  children,
  ...boxProps
}) => {
  return (
    <Flex
      direction="column"
      px={["25px", "40px"]}
      py={["25px", "40px"]}
      bg="black"
      borderWidth="2px"
      {...boxProps}
    >
      {children}
    </Flex>
  );
}
