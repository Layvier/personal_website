import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { theme } from './theme';

export const Wrapper: React.FC<{}> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
