import * as React from "react";
import { Flex, FlexProps } from "@chakra-ui/layout";

export const Section: React.FC<{ sectionId: string, fullHeight?: boolean } & FlexProps> = ({
  sectionId,
  fullHeight,

  children,
  ...flexProps
}) => {
  return (
    <Flex
      id={sectionId}
      flexDirection="column"
      maxWidth="2000px"
      margin="auto"
      minHeight={fullHeight ? "100vh" : 0}
      pl={["22px", "81px"]}
      pr={["22px", "235px"]}
      pt="75px"
      pb="75px"
      {...flexProps}
    >
      {children}
    </Flex>
  );
};
