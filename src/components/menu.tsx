import { Link } from 'gatsby';
import React from 'react';

type Props = {
  className?: string;
};

const Menu: React.FC<Props> = ({ className }) => {
  return (
    <ul className={className}>
      <Link to="/about">About</Link>
      <Link to="/collection">Collection</Link>
    </ul>
  );
};

export default Menu;
