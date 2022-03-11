import React from 'react';

import ListItem from 'src/components/listItem';

import { Collection } from 'src/types';

import * as styles from '../styles/modules/list.module.scss';

const List: React.FC<Collection> = ({ children, nodes }) => {
  return (
    <section className={styles.section}>
      {children}
      <ul className={styles.list}>
        {nodes.map((item) => {
          return (
            <li className={styles.item} key={item.jsonId}>
              <ListItem
                id={item.jsonId}
                title={item.title}
                image={item.image}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default List;
