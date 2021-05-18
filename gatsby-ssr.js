/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from  'react'
import { Wrapper } from "./src/Wrapper";

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => {
    return (
      <Wrapper>{element}</Wrapper>
    );
  }