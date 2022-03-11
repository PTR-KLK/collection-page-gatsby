import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'src/components/layout';
import Hero from 'src/components/hero';
import Breadcrumbs from 'src/components/breadcrumbs';
import List from 'src/components/list';
import HeroWrapper from 'src/components/heroWrapper';

import { CollectionPageProps } from 'src/types/collection';

import * as styles from '../../styles/collectionPage.module.scss';

const CollectionPage: React.FC<CollectionPageProps> = ({ data, uri }) => {
  const {
    allCollection: { nodes: collection },
  } = data;

  return (
    <Layout title="Collection" className="main--collection">
      <HeroWrapper>
        <Hero className={styles.hero} />
        <h2>Collection</h2>
      </HeroWrapper>
      <Breadcrumbs currentUri={uri} />
      <List nodes={collection} />
    </Layout>
  );
};

export const query = graphql`
  query CollectionFull {
    allCollection {
      nodes {
        jsonId
        title
        image {
          name
          src {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;

export default CollectionPage;
