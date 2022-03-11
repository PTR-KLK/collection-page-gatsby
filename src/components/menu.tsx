import { Link } from 'gatsby';
import React from 'react';

type Props = {
  className?: string;
};

const Menu: React.FC<Props> = ({ children, className }) => {
  return (
    <ul className={className}>
      <Link to="/about">About</Link>
      <Link to="/collection">Collection</Link>
      {children}
    </ul>
  );
};

export default Menu;
