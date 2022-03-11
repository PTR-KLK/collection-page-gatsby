import { PageProps } from 'gatsby';
import { CollectionQuery } from '../types/types.generated';

export type IndexPageProps = PageProps<CollectionQuery>;

export type Collection = IndexPageProps['data']['allCollection'];
