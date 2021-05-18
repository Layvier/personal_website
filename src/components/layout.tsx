/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Center, Flex } from "@chakra-ui/layout"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import Header from "./header"

// import "./layout.css"

export const Layout: React.FC<{}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Flex direction="column" minH="100vh">
        <Flex as="main" flexGrow={1}>{children}</Flex>
        <Center as="footer" justifySelf="center">
          © {new Date().getFullYear()} Olivier Ramier
        </Center>
      </Flex>
    </>
  )
}

