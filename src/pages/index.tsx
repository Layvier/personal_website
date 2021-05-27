import { Heading } from '@chakra-ui/layout';
import * as React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { fonts } from '../theme';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Heading color="gray.800" size="2xl" fontFamily={fonts.spartan} fontWeight={400}>
      Olivier Ramier
    </Heading>
  </Layout>
);

export default IndexPage;
