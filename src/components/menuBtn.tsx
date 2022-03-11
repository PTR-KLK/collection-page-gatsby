import React from 'react';

type Props = {
  onClick: () => void;
};

const MenuBtn: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Menu</button>;
};

export default MenuBtn;
