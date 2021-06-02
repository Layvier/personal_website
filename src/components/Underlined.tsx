import { Text } from '@chakra-ui/layout';
import * as React from 'react';

export const Underlined: React.FC<{ fontWeight?: number }> = ({ children, fontWeight = 700 }) => {
  return (
    <Text as="span" position="relative" zIndex={1} fontWeight={fontWeight}>
      <Text as="span" position="relative" zIndex={2} className="underlined">
        {children}
      </Text>
    </Text>
  );
};
