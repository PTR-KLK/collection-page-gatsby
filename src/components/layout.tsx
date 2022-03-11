import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from './navbar';

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
      <Navbar />
      <article>{children}</article>
    </main>
  );
};

export default Layout;
