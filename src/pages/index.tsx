import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { CollectionQuery } from '../types/types.generated';

import * as styles from '../styles/home.module.scss';

type IndexPageProps = PageProps<CollectionQuery>;

const Home: React.FC<IndexPageProps> = ({ data }) => {
  const {
    allCollectionJson: { nodes: collection },
  } = data;

  return (
    <main>
      <ul className={styles.list}>
        {collection.map((item) => {
          return (
            <li key={item.jsonId} className={styles.item}>
              {item.image.src ? (
                <GatsbyImage
                  image={getImage(item.image.src)}
                  alt={item.image.name}
                />
              ) : null}
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export const query = graphql`
  query Collection {
    allCollectionJson {
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
