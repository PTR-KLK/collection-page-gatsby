import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';

type Props = {
  className?: string;
};

const Hero: React.FC<Props> = ({ className }) => {
  return (
    <StaticQuery
      query={graphql`
        query Hero {
          file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      `}
      render={(data) => {
        const imageSrc = data.file as ImageDataLike;
        const imageData = getImage(imageSrc) as IGatsbyImageData;

        return (
          <GatsbyImage image={imageData} alt="clasroom" className={className} />
        );
      }}
    />
  );
};

export default Hero;
