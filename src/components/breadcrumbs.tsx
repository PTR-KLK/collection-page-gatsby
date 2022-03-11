import React from 'react';
import { Link } from 'gatsby';

import { BreadcrumbsProps, PathItem } from 'src/types/breadcrumbs';

import * as styles from '../styles/modules/breadcrumbs.module.scss';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentUri,
  customName,
}) => {
  const pathnameArr = currentUri.split('/');

  const paths = pathnameArr.slice(1).reduce(
    (prevPath: PathItem[], currPath: string): PathItem[] => {
      return [
        ...prevPath,
        {
          name: currPath,
          uri: [prevPath[prevPath.length - 1].uri, currPath].join('/'),
        },
      ];
    },
    [{ name: '', uri: '' }],
  );

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">home</Link>
      {paths.slice(1).map((pathItem, idx) => {
        return (
          <span key={`breadcrumb-${idx}`}>
            <span className={styles.backslash}>/</span>
            {paths.slice(1).length - 1 !== idx ? (
              <Link to={pathItem.uri}>{pathItem.name}</Link>
            ) : (
              <span>{customName ? customName : pathItem.name}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
