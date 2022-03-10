import React from 'react';
import { Link } from 'gatsby';

import * as styles from '../styles/layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <nav className={styles.navbar}>
        <Link to="/">
          <h1>Product name</h1>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/collection">Collection</Link>
      </nav>
      <article>{children}</article>
    </main>
  );
};

export default Layout;
