import React from 'react';
import { Link } from 'gatsby';

import * as styles from '../styles/layout.module.scss';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
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
