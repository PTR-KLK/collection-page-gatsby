import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import MenuBtn from './menuBtn';
import LoginButton from './loginBtn';
import Menu from './menu';

import * as navbarStyles from '../styles/navbar.module.scss';
import * as menuStyles from '../styles/menu.module.scss';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  const handleResize = (): void => {
    if (window.matchMedia('(min-width:768px)').matches) {
      setBtnVisible(false);
      setOpen(false);
    } else {
      setBtnVisible(true);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open, btnVisible]);

  return (
    <nav className={navbarStyles.navbar}>
      <Link to="/">
        <h1 className={navbarStyles.pageTitle}>Product name</h1>
      </Link>
      {btnVisible ? (
        <MenuBtn onClick={() => setOpen(!open)} />
      ) : (
        <Menu className={menuStyles.desktop} />
      )}
      {open && (
        <Menu className={menuStyles.mobile}>
          <LoginButton />
        </Menu>
      )}
      {!btnVisible && <LoginButton />}
    </nav>
  );
};

export default Navbar;
