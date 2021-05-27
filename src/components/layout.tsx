/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Center, Flex } from '@chakra-ui/layout';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import '../main.css';

export const Layout: React.FC<{}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Flex direction="column" minH="100vh">
      <Flex as="main" flexGrow={1} direction="column">
        {children}
      </Flex>
      <Center
        as="footer"
        justifySelf="center"
        py={4}
        bgColor="gray.900"
        color="gray.150"
        fontWeight={800}
        fontSize="lg"
        letterSpacing={1}
      >
        © {new Date().getFullYear()} Olivier Ramier
      </Center>
    </Flex>
  );
};
