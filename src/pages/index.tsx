import { Heading } from '@chakra-ui/layout';
import * as React from 'react';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Heading>Olivier Ramier</Heading>
  </Layout>
);

export default IndexPage;
