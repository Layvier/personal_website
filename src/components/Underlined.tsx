import { Text } from '@chakra-ui/layout';
import * as React from 'react';

export const Underlined: React.FC<{}> = ({ children }) => {
  return (
    <Text as="span" position="relative" zIndex={1} fontWeight={700}>
      <Text as="span" position="relative" zIndex={2} className="underlined">
        {children}
      </Text>
    </Text>
  );
};
