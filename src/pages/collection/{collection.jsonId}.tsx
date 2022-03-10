import React from 'react';
import { graphql } from 'gatsby';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';

import Layout from 'src/components/layout';
import { ItemPageProps } from 'src/types/itemPage';

const ItemPage: React.FC<ItemPageProps> = (props) => {
  const {
    collection: {
      title,
      description,
      image: { name, src },
    },
  } = props.data;

  const imageSrc = src as ImageDataLike;
  const imageData = getImage(imageSrc) as IGatsbyImageData;

  return (
    <Layout>
      <section>
        <h3>{title}</h3>
        {imageSrc && <GatsbyImage image={imageData} alt={name} />}
        <p>{description}</p>
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
