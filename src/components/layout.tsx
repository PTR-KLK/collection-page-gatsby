import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from './navbar';

type Props = {
  title?: string;
  className?: string;
};

const Layout: React.FC<Props> = ({ children, title, className }) => {
  return (
    <main className={className}>
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
