import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import * as React from 'react';

export const Link: React.FC<{} & LinkProps> = ({ children, ...props }) => {
  return (
    <ChakraLink color="baby-blue-eyes" {...props}>
      {children}
    </ChakraLink>
  );
};
