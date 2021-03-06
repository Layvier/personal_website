import { Flex, FlexProps } from "@chakra-ui/layout";
import * as React from "react";

export const Section: React.FC<{ sectionId: string } & FlexProps> = ({
  sectionId,

  children,
  ...flexProps
}) => {
  return (
    <Flex
      minH="100vh"
      id={sectionId}
      {...flexProps}
      direction="column"
      alignItems="stretch"
      px={{ base: 4, lg: 28, xl: 32 }}
    >
      {children}
    </Flex>
  );
};
