import React from 'react';

import * as styles from '../styles/heroWrapper.module.scss';

const HeroWrapper: React.FC = ({ children }) => {
  return <header className={styles.heroWrapper}>{children}</header>;
};

export default HeroWrapper;
