import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import MenuBtn from './menuBtn';
import Menu from './menu';

import * as layoutStyles from '../styles/layout.module.scss';
import * as menuStyles from '../styles/menu.module.scss';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width:768px)').matches) {
      setBtnVisible(false);
      setOpen(false);
    } else {
      setBtnVisible(true);
    }
  });

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <nav className={layoutStyles.navbar}>
        <Link to="/">
          <h1>Product name</h1>
        </Link>
        {!btnVisible && <Menu className={menuStyles.desktop} />}
        {btnVisible && <MenuBtn onClick={() => setOpen(!open)} />}
        {open && <Menu className={menuStyles.mobile} />}
      </nav>
      <article>{children}</article>
    </main>
  );
};

export default Layout;
