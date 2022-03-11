import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as navbarStyles from '../styles/modules/loginButton.module.scss';

const LoginButton: React.FC = () => {
  return (
    <button className={`${navbarStyles.loginButton} login--custom`}>
      <StaticImage
        src="../images/login.png"
        alt="person figure"
        width={19}
        height={26}
      />
    </button>
  );
};

export default LoginButton;
