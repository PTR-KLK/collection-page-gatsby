import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from 'src/components/layout';
import Hero from 'src/components/hero';
import List from 'src/components/list';

import { IndexPageProps } from 'src/types';

import * as styles from '../styles/home.module.scss';

const Home: React.FC<IndexPageProps> = ({ data }) => {
  const {
    allCollection: { nodes: collection },
  } = data;

  return (
    <Layout title="Home">
      <Hero className={styles.hero} />
      <List nodes={collection}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Collection</h2>
          <Link to="/collection" className={styles.link}>
            see all
          </Link>
        </header>
      </List>
    </Layout>
  );
};

export const query = graphql`
  query Collection {
    allCollection(limit: 4) {
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

export default Home;
