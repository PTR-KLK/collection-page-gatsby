import React from 'react';

import ListItem from 'src/components/listItem';

import * as styles from '../styles/list.module.scss';
import { Collection } from 'src/types';

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
