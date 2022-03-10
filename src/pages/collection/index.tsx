import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'src/components/layout';
import ListItem from 'src/components/listItem';
import { CollectionPageProps } from 'src/types/collection';

import * as styles from '../../styles/home.module.scss';

const CollectionPage: React.FC<CollectionPageProps> = ({ data }) => {
  const {
    allCollection: { nodes: collection },
  } = data;

  return (
    <Layout>
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
