/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
 import React from 'react'
import { Wrapper } from "./src/Wrapper";

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => {
    return (
      <Wrapper>{element}</Wrapper>
    );
  }