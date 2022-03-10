import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from 'src/components/layout';
import ListItem from 'src/components/listItem';
import { IndexPageProps } from 'src/types';

import * as styles from '../styles/home.module.scss';

const Home: React.FC<IndexPageProps> = ({ data }) => {
  const {
    allCollection: { nodes: collection },
  } = data;

  return (
    <Layout title="Home">
      <h2>Collection</h2>
      <Link to="/collection">See all</Link>
      <ul className={styles.list}>
        {collection.map((item) => {
          return (
            <li className={styles.item} key={item.jsonId}>
              <ListItem
                id={item.jsonId}
                title={item.title}
                image={item.image}
              />
            </li>
          );
        })}
      </ul>
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
