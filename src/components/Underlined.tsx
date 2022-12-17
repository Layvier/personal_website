import { Text } from "@chakra-ui/layout";
import * as React from "react";

export const Underlined: React.FC<{
  fontWeight?: number;
  children: string;
}> = ({ children, fontWeight = 600 }) => {
  return (
    <>
      {children
        .split(" ")
        .join("$ $")
        .split("$")
        .map((text) => (
          <Text
            as="span"
            position="relative"
            zIndex={1}
            fontWeight={fontWeight}
          >
            <Text
              as="span"
              position="relative"
              zIndex={2}
              className="underlined"
            >
              {text}
            </Text>
          </Text>
        ))}
    </>
  );
};
