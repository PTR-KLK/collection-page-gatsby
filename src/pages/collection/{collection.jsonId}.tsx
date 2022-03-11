import React from 'react';
import { graphql } from 'gatsby';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';

import Layout from 'src/components/layout';
import Breadcrumbs from 'src/components/breadcrumbs';

import { ItemPageProps } from 'src/types/itemPage';

import * as styles from '../../styles/itemPage.module.scss';

const ItemPage: React.FC<ItemPageProps> = ({ data, uri }) => {
  const {
    collection: {
      title,
      description,
      image: { name, src },
    },
  } = data;

  const imageSrc = src as ImageDataLike;
  const imageData = getImage(imageSrc) as IGatsbyImageData;

  return (
    <Layout title={`Product - ${title}`}>
      <Breadcrumbs currentUri={uri} customName={title} />
      <section className={styles.section}>
        <h2 className={styles.heading}>{title}</h2>
        <figure className={styles.figure}>
          {imageSrc && (
            <GatsbyImage
              image={imageData}
              alt={name}
              className={styles.image}
            />
          )}
          <figcaption className={styles.figcaption}>
            <h3 className={styles.subheading}>Section Title</h3>
            <p className={styles.paragraph}>{description}</p>
          </figcaption>
        </figure>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query Item($jsonId: String) {
    collection(jsonId: { eq: $jsonId }) {
      title
      description
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
`;

export default ItemPage;
