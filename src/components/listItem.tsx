import React from 'react';
import { Link } from 'gatsby';
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from 'gatsby-plugin-image';

import { ItemProps } from 'src/types/listItem';

const ListItem: React.FC<ItemProps> = ({ id, title, image }) => {
  const imageSrc = image.src as ImageDataLike;
  const imageData = getImage(imageSrc) as IGatsbyImageData;

  return (
    <Link to={`/collection/${id}`}>
      {imageSrc && <GatsbyImage image={imageData} alt={image.name} />}
      <p>{title}</p>
    </Link>
  );
};

export default ListItem;
