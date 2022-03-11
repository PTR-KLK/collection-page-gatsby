import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from '../styles/menuButton.module.scss';

type Props = {
  onClick: () => void;
};

const MenuBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.hamburger} onClick={onClick}>
      <StaticImage
        src="../images/menu.svg"
        alt="hamburger bar"
        width={32}
        height={19}
      />
    </button>
  );
};

export default MenuBtn;
