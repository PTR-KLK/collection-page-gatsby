export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
  speed: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne: InputMaybe<Scalars['Boolean']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type CollectionJson = Node & {
  __typename?: 'CollectionJson';
  children: Array<Node>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Maybe<CollectionJsonImage>;
  internal: Internal;
  jsonId: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  title: Maybe<Scalars['String']>;
};

export type CollectionJsonConnection = {
  __typename?: 'CollectionJsonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<CollectionJsonEdge>;
  group: Array<CollectionJsonGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CollectionJson>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type CollectionJsonConnectionDistinctArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonConnectionGroupArgs = {
  field: CollectionJsonFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type CollectionJsonConnectionMaxArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonConnectionMinArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonConnectionSumArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonEdge = {
  __typename?: 'CollectionJsonEdge';
  next: Maybe<CollectionJson>;
  node: CollectionJson;
  previous: Maybe<CollectionJson>;
};

export enum CollectionJsonFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  description = 'description',
  id = 'id',
  image___name = 'image___name',
  image___src___absolutePath = 'image___src___absolutePath',
  image___src___accessTime = 'image___src___accessTime',
  image___src___atime = 'image___src___atime',
  image___src___atimeMs = 'image___src___atimeMs',
  image___src___base = 'image___src___base',
  image___src___birthTime = 'image___src___birthTime',
  image___src___birthtime = 'image___src___birthtime',
  image___src___birthtimeMs = 'image___src___birthtimeMs',
  image___src___blksize = 'image___src___blksize',
  image___src___blocks = 'image___src___blocks',
  image___src___changeTime = 'image___src___changeTime',
  image___src___childCollectionJson___children = 'image___src___childCollectionJson___children',
  image___src___childCollectionJson___description = 'image___src___childCollectionJson___description',
  image___src___childCollectionJson___id = 'image___src___childCollectionJson___id',
  image___src___childCollectionJson___jsonId = 'image___src___childCollectionJson___jsonId',
  image___src___childCollectionJson___title = 'image___src___childCollectionJson___title',
  image___src___childImageSharp___children = 'image___src___childImageSharp___children',
  image___src___childImageSharp___gatsbyImageData = 'image___src___childImageSharp___gatsbyImageData',
  image___src___childImageSharp___id = 'image___src___childImageSharp___id',
  image___src___children = 'image___src___children',
  image___src___childrenCollectionJson = 'image___src___childrenCollectionJson',
  image___src___childrenCollectionJson___children = 'image___src___childrenCollectionJson___children',
  image___src___childrenCollectionJson___description = 'image___src___childrenCollectionJson___description',
  image___src___childrenCollectionJson___id = 'image___src___childrenCollectionJson___id',
  image___src___childrenCollectionJson___jsonId = 'image___src___childrenCollectionJson___jsonId',
  image___src___childrenCollectionJson___title = 'image___src___childrenCollectionJson___title',
  image___src___childrenImageSharp = 'image___src___childrenImageSharp',
  image___src___childrenImageSharp___children = 'image___src___childrenImageSharp___children',
  image___src___childrenImageSharp___gatsbyImageData = 'image___src___childrenImageSharp___gatsbyImageData',
  image___src___childrenImageSharp___id = 'image___src___childrenImageSharp___id',
  image___src___children___children = 'image___src___children___children',
  image___src___children___id = 'image___src___children___id',
  image___src___ctime = 'image___src___ctime',
  image___src___ctimeMs = 'image___src___ctimeMs',
  image___src___dev = 'image___src___dev',
  image___src___dir = 'image___src___dir',
  image___src___ext = 'image___src___ext',
  image___src___extension = 'image___src___extension',
  image___src___gid = 'image___src___gid',
  image___src___id = 'image___src___id',
  image___src___ino = 'image___src___ino',
  image___src___internal___content = 'image___src___internal___content',
  image___src___internal___contentDigest = 'image___src___internal___contentDigest',
  image___src___internal___description = 'image___src___internal___description',
  image___src___internal___fieldOwners = 'image___src___internal___fieldOwners',
  image___src___internal___ignoreType = 'image___src___internal___ignoreType',
  image___src___internal___mediaType = 'image___src___internal___mediaType',
  image___src___internal___owner = 'image___src___internal___owner',
  image___src___internal___type = 'image___src___internal___type',
  image___src___mode = 'image___src___mode',
  image___src___modifiedTime = 'image___src___modifiedTime',
  image___src___mtime = 'image___src___mtime',
  image___src___mtimeMs = 'image___src___mtimeMs',
  image___src___name = 'image___src___name',
  image___src___nlink = 'image___src___nlink',
  image___src___parent___children = 'image___src___parent___children',
  image___src___parent___id = 'image___src___parent___id',
  image___src___prettySize = 'image___src___prettySize',
  image___src___publicURL = 'image___src___publicURL',
  image___src___rdev = 'image___src___rdev',
  image___src___relativeDirectory = 'image___src___relativeDirectory',
  image___src___relativePath = 'image___src___relativePath',
  image___src___root = 'image___src___root',
  image___src___size = 'image___src___size',
  image___src___sourceInstanceName = 'image___src___sourceInstanceName',
  image___src___uid = 'image___src___uid',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  jsonId = 'jsonId',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  title = 'title',
}

export type CollectionJsonFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<CollectionJsonImageFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsonId: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type CollectionJsonFilterListInput = {
  elemMatch: InputMaybe<CollectionJsonFilterInput>;
};

export type CollectionJsonGroupConnection = {
  __typename?: 'CollectionJsonGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<CollectionJsonEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<CollectionJsonGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<CollectionJson>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type CollectionJsonGroupConnectionDistinctArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonGroupConnectionGroupArgs = {
  field: CollectionJsonFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type CollectionJsonGroupConnectionMaxArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonGroupConnectionMinArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonGroupConnectionSumArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonImage = {
  __typename?: 'CollectionJsonImage';
  name: Maybe<Scalars['String']>;
  src: Maybe<File>;
};

export type CollectionJsonImageFilterInput = {
  name: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<FileFilterInput>;
};

export type CollectionJsonSortInput = {
  fields: InputMaybe<Array<InputMaybe<CollectionJsonFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>;
  gt: InputMaybe<Scalars['Date']>;
  gte: InputMaybe<Scalars['Date']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt: InputMaybe<Scalars['Date']>;
  lte: InputMaybe<Scalars['Date']>;
  ne: InputMaybe<Scalars['Date']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  changeTime = 'changeTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid',
}

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type CollectionJson or null if there are no children of given type on this node */
  childCollectionJson: Maybe<CollectionJson>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type CollectionJson */
  childrenCollectionJson: Maybe<Array<Maybe<CollectionJson>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  absolutePath = 'absolutePath',
  accessTime = 'accessTime',
  atime = 'atime',
  atimeMs = 'atimeMs',
  base = 'base',
  birthTime = 'birthTime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  changeTime = 'changeTime',
  childCollectionJson___children = 'childCollectionJson___children',
  childCollectionJson___children___children = 'childCollectionJson___children___children',
  childCollectionJson___children___children___children = 'childCollectionJson___children___children___children',
  childCollectionJson___children___children___id = 'childCollectionJson___children___children___id',
  childCollectionJson___children___id = 'childCollectionJson___children___id',
  childCollectionJson___children___internal___content = 'childCollectionJson___children___internal___content',
  childCollectionJson___children___internal___contentDigest = 'childCollectionJson___children___internal___contentDigest',
  childCollectionJson___children___internal___description = 'childCollectionJson___children___internal___description',
  childCollectionJson___children___internal___fieldOwners = 'childCollectionJson___children___internal___fieldOwners',
  childCollectionJson___children___internal___ignoreType = 'childCollectionJson___children___internal___ignoreType',
  childCollectionJson___children___internal___mediaType = 'childCollectionJson___children___internal___mediaType',
  childCollectionJson___children___internal___owner = 'childCollectionJson___children___internal___owner',
  childCollectionJson___children___internal___type = 'childCollectionJson___children___internal___type',
  childCollectionJson___children___parent___children = 'childCollectionJson___children___parent___children',
  childCollectionJson___children___parent___id = 'childCollectionJson___children___parent___id',
  childCollectionJson___description = 'childCollectionJson___description',
  childCollectionJson___id = 'childCollectionJson___id',
  childCollectionJson___image___name = 'childCollectionJson___image___name',
  childCollectionJson___image___src___absolutePath = 'childCollectionJson___image___src___absolutePath',
  childCollectionJson___image___src___accessTime = 'childCollectionJson___image___src___accessTime',
  childCollectionJson___image___src___atime = 'childCollectionJson___image___src___atime',
  childCollectionJson___image___src___atimeMs = 'childCollectionJson___image___src___atimeMs',
  childCollectionJson___image___src___base = 'childCollectionJson___image___src___base',
  childCollectionJson___image___src___birthTime = 'childCollectionJson___image___src___birthTime',
  childCollectionJson___image___src___birthtime = 'childCollectionJson___image___src___birthtime',
  childCollectionJson___image___src___birthtimeMs = 'childCollectionJson___image___src___birthtimeMs',
  childCollectionJson___image___src___blksize = 'childCollectionJson___image___src___blksize',
  childCollectionJson___image___src___blocks = 'childCollectionJson___image___src___blocks',
  childCollectionJson___image___src___changeTime = 'childCollectionJson___image___src___changeTime',
  childCollectionJson___image___src___children = 'childCollectionJson___image___src___children',
  childCollectionJson___image___src___childrenCollectionJson = 'childCollectionJson___image___src___childrenCollectionJson',
  childCollectionJson___image___src___childrenImageSharp = 'childCollectionJson___image___src___childrenImageSharp',
  childCollectionJson___image___src___ctime = 'childCollectionJson___image___src___ctime',
  childCollectionJson___image___src___ctimeMs = 'childCollectionJson___image___src___ctimeMs',
  childCollectionJson___image___src___dev = 'childCollectionJson___image___src___dev',
  childCollectionJson___image___src___dir = 'childCollectionJson___image___src___dir',
  childCollectionJson___image___src___ext = 'childCollectionJson___image___src___ext',
  childCollectionJson___image___src___extension = 'childCollectionJson___image___src___extension',
  childCollectionJson___image___src___gid = 'childCollectionJson___image___src___gid',
  childCollectionJson___image___src___id = 'childCollectionJson___image___src___id',
  childCollectionJson___image___src___ino = 'childCollectionJson___image___src___ino',
  childCollectionJson___image___src___mode = 'childCollectionJson___image___src___mode',
  childCollectionJson___image___src___modifiedTime = 'childCollectionJson___image___src___modifiedTime',
  childCollectionJson___image___src___mtime = 'childCollectionJson___image___src___mtime',
  childCollectionJson___image___src___mtimeMs = 'childCollectionJson___image___src___mtimeMs',
  childCollectionJson___image___src___name = 'childCollectionJson___image___src___name',
  childCollectionJson___image___src___nlink = 'childCollectionJson___image___src___nlink',
  childCollectionJson___image___src___prettySize = 'childCollectionJson___image___src___prettySize',
  childCollectionJson___image___src___publicURL = 'childCollectionJson___image___src___publicURL',
  childCollectionJson___image___src___rdev = 'childCollectionJson___image___src___rdev',
  childCollectionJson___image___src___relativeDirectory = 'childCollectionJson___image___src___relativeDirectory',
  childCollectionJson___image___src___relativePath = 'childCollectionJson___image___src___relativePath',
  childCollectionJson___image___src___root = 'childCollectionJson___image___src___root',
  childCollectionJson___image___src___size = 'childCollectionJson___image___src___size',
  childCollectionJson___image___src___sourceInstanceName = 'childCollectionJson___image___src___sourceInstanceName',
  childCollectionJson___image___src___uid = 'childCollectionJson___image___src___uid',
  childCollectionJson___internal___content = 'childCollectionJson___internal___content',
  childCollectionJson___internal___contentDigest = 'childCollectionJson___internal___contentDigest',
  childCollectionJson___internal___description = 'childCollectionJson___internal___description',
  childCollectionJson___internal___fieldOwners = 'childCollectionJson___internal___fieldOwners',
  childCollectionJson___internal___ignoreType = 'childCollectionJson___internal___ignoreType',
  childCollectionJson___internal___mediaType = 'childCollectionJson___internal___mediaType',
  childCollectionJson___internal___owner = 'childCollectionJson___internal___owner',
  childCollectionJson___internal___type = 'childCollectionJson___internal___type',
  childCollectionJson___jsonId = 'childCollectionJson___jsonId',
  childCollectionJson___parent___children = 'childCollectionJson___parent___children',
  childCollectionJson___parent___children___children = 'childCollectionJson___parent___children___children',
  childCollectionJson___parent___children___id = 'childCollectionJson___parent___children___id',
  childCollectionJson___parent___id = 'childCollectionJson___parent___id',
  childCollectionJson___parent___internal___content = 'childCollectionJson___parent___internal___content',
  childCollectionJson___parent___internal___contentDigest = 'childCollectionJson___parent___internal___contentDigest',
  childCollectionJson___parent___internal___description = 'childCollectionJson___parent___internal___description',
  childCollectionJson___parent___internal___fieldOwners = 'childCollectionJson___parent___internal___fieldOwners',
  childCollectionJson___parent___internal___ignoreType = 'childCollectionJson___parent___internal___ignoreType',
  childCollectionJson___parent___internal___mediaType = 'childCollectionJson___parent___internal___mediaType',
  childCollectionJson___parent___internal___owner = 'childCollectionJson___parent___internal___owner',
  childCollectionJson___parent___internal___type = 'childCollectionJson___parent___internal___type',
  childCollectionJson___parent___parent___children = 'childCollectionJson___parent___parent___children',
  childCollectionJson___parent___parent___id = 'childCollectionJson___parent___parent___id',
  childCollectionJson___title = 'childCollectionJson___title',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  children = 'children',
  childrenCollectionJson = 'childrenCollectionJson',
  childrenCollectionJson___children = 'childrenCollectionJson___children',
  childrenCollectionJson___children___children = 'childrenCollectionJson___children___children',
  childrenCollectionJson___children___children___children = 'childrenCollectionJson___children___children___children',
  childrenCollectionJson___children___children___id = 'childrenCollectionJson___children___children___id',
  childrenCollectionJson___children___id = 'childrenCollectionJson___children___id',
  childrenCollectionJson___children___internal___content = 'childrenCollectionJson___children___internal___content',
  childrenCollectionJson___children___internal___contentDigest = 'childrenCollectionJson___children___internal___contentDigest',
  childrenCollectionJson___children___internal___description = 'childrenCollectionJson___children___internal___description',
  childrenCollectionJson___children___internal___fieldOwners = 'childrenCollectionJson___children___internal___fieldOwners',
  childrenCollectionJson___children___internal___ignoreType = 'childrenCollectionJson___children___internal___ignoreType',
  childrenCollectionJson___children___internal___mediaType = 'childrenCollectionJson___children___internal___mediaType',
  childrenCollectionJson___children___internal___owner = 'childrenCollectionJson___children___internal___owner',
  childrenCollectionJson___children___internal___type = 'childrenCollectionJson___children___internal___type',
  childrenCollectionJson___children___parent___children = 'childrenCollectionJson___children___parent___children',
  childrenCollectionJson___children___parent___id = 'childrenCollectionJson___children___parent___id',
  childrenCollectionJson___description = 'childrenCollectionJson___description',
  childrenCollectionJson___id = 'childrenCollectionJson___id',
  childrenCollectionJson___image___name = 'childrenCollectionJson___image___name',
  childrenCollectionJson___image___src___absolutePath = 'childrenCollectionJson___image___src___absolutePath',
  childrenCollectionJson___image___src___accessTime = 'childrenCollectionJson___image___src___accessTime',
  childrenCollectionJson___image___src___atime = 'childrenCollectionJson___image___src___atime',
  childrenCollectionJson___image___src___atimeMs = 'childrenCollectionJson___image___src___atimeMs',
  childrenCollectionJson___image___src___base = 'childrenCollectionJson___image___src___base',
  childrenCollectionJson___image___src___birthTime = 'childrenCollectionJson___image___src___birthTime',
  childrenCollectionJson___image___src___birthtime = 'childrenCollectionJson___image___src___birthtime',
  childrenCollectionJson___image___src___birthtimeMs = 'childrenCollectionJson___image___src___birthtimeMs',
  childrenCollectionJson___image___src___blksize = 'childrenCollectionJson___image___src___blksize',
  childrenCollectionJson___image___src___blocks = 'childrenCollectionJson___image___src___blocks',
  childrenCollectionJson___image___src___changeTime = 'childrenCollectionJson___image___src___changeTime',
  childrenCollectionJson___image___src___children = 'childrenCollectionJson___image___src___children',
  childrenCollectionJson___image___src___childrenCollectionJson = 'childrenCollectionJson___image___src___childrenCollectionJson',
  childrenCollectionJson___image___src___childrenImageSharp = 'childrenCollectionJson___image___src___childrenImageSharp',
  childrenCollectionJson___image___src___ctime = 'childrenCollectionJson___image___src___ctime',
  childrenCollectionJson___image___src___ctimeMs = 'childrenCollectionJson___image___src___ctimeMs',
  childrenCollectionJson___image___src___dev = 'childrenCollectionJson___image___src___dev',
  childrenCollectionJson___image___src___dir = 'childrenCollectionJson___image___src___dir',
  childrenCollectionJson___image___src___ext = 'childrenCollectionJson___image___src___ext',
  childrenCollectionJson___image___src___extension = 'childrenCollectionJson___image___src___extension',
  childrenCollectionJson___image___src___gid = 'childrenCollectionJson___image___src___gid',
  childrenCollectionJson___image___src___id = 'childrenCollectionJson___image___src___id',
  childrenCollectionJson___image___src___ino = 'childrenCollectionJson___image___src___ino',
  childrenCollectionJson___image___src___mode = 'childrenCollectionJson___image___src___mode',
  childrenCollectionJson___image___src___modifiedTime = 'childrenCollectionJson___image___src___modifiedTime',
  childrenCollectionJson___image___src___mtime = 'childrenCollectionJson___image___src___mtime',
  childrenCollectionJson___image___src___mtimeMs = 'childrenCollectionJson___image___src___mtimeMs',
  childrenCollectionJson___image___src___name = 'childrenCollectionJson___image___src___name',
  childrenCollectionJson___image___src___nlink = 'childrenCollectionJson___image___src___nlink',
  childrenCollectionJson___image___src___prettySize = 'childrenCollectionJson___image___src___prettySize',
  childrenCollectionJson___image___src___publicURL = 'childrenCollectionJson___image___src___publicURL',
  childrenCollectionJson___image___src___rdev = 'childrenCollectionJson___image___src___rdev',
  childrenCollectionJson___image___src___relativeDirectory = 'childrenCollectionJson___image___src___relativeDirectory',
  childrenCollectionJson___image___src___relativePath = 'childrenCollectionJson___image___src___relativePath',
  childrenCollectionJson___image___src___root = 'childrenCollectionJson___image___src___root',
  childrenCollectionJson___image___src___size = 'childrenCollectionJson___image___src___size',
  childrenCollectionJson___image___src___sourceInstanceName = 'childrenCollectionJson___image___src___sourceInstanceName',
  childrenCollectionJson___image___src___uid = 'childrenCollectionJson___image___src___uid',
  childrenCollectionJson___internal___content = 'childrenCollectionJson___internal___content',
  childrenCollectionJson___internal___contentDigest = 'childrenCollectionJson___internal___contentDigest',
  childrenCollectionJson___internal___description = 'childrenCollectionJson___internal___description',
  childrenCollectionJson___internal___fieldOwners = 'childrenCollectionJson___internal___fieldOwners',
  childrenCollectionJson___internal___ignoreType = 'childrenCollectionJson___internal___ignoreType',
  childrenCollectionJson___internal___mediaType = 'childrenCollectionJson___internal___mediaType',
  childrenCollectionJson___internal___owner = 'childrenCollectionJson___internal___owner',
  childrenCollectionJson___internal___type = 'childrenCollectionJson___internal___type',
  childrenCollectionJson___jsonId = 'childrenCollectionJson___jsonId',
  childrenCollectionJson___parent___children = 'childrenCollectionJson___parent___children',
  childrenCollectionJson___parent___children___children = 'childrenCollectionJson___parent___children___children',
  childrenCollectionJson___parent___children___id = 'childrenCollectionJson___parent___children___id',
  childrenCollectionJson___parent___id = 'childrenCollectionJson___parent___id',
  childrenCollectionJson___parent___internal___content = 'childrenCollectionJson___parent___internal___content',
  childrenCollectionJson___parent___internal___contentDigest = 'childrenCollectionJson___parent___internal___contentDigest',
  childrenCollectionJson___parent___internal___description = 'childrenCollectionJson___parent___internal___description',
  childrenCollectionJson___parent___internal___fieldOwners = 'childrenCollectionJson___parent___internal___fieldOwners',
  childrenCollectionJson___parent___internal___ignoreType = 'childrenCollectionJson___parent___internal___ignoreType',
  childrenCollectionJson___parent___internal___mediaType = 'childrenCollectionJson___parent___internal___mediaType',
  childrenCollectionJson___parent___internal___owner = 'childrenCollectionJson___parent___internal___owner',
  childrenCollectionJson___parent___internal___type = 'childrenCollectionJson___parent___internal___type',
  childrenCollectionJson___parent___parent___children = 'childrenCollectionJson___parent___parent___children',
  childrenCollectionJson___parent___parent___id = 'childrenCollectionJson___parent___parent___id',
  childrenCollectionJson___title = 'childrenCollectionJson___title',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  ctime = 'ctime',
  ctimeMs = 'ctimeMs',
  dev = 'dev',
  dir = 'dir',
  ext = 'ext',
  extension = 'extension',
  gid = 'gid',
  id = 'id',
  ino = 'ino',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  mode = 'mode',
  modifiedTime = 'modifiedTime',
  mtime = 'mtime',
  mtimeMs = 'mtimeMs',
  name = 'name',
  nlink = 'nlink',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  prettySize = 'prettySize',
  publicURL = 'publicURL',
  rdev = 'rdev',
  relativeDirectory = 'relativeDirectory',
  relativePath = 'relativePath',
  root = 'root',
  size = 'size',
  sourceInstanceName = 'sourceInstanceName',
  uid = 'uid',
}

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childCollectionJson: InputMaybe<CollectionJsonFilterInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenCollectionJson: InputMaybe<CollectionJsonFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum GatsbyImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
}

export enum GatsbyImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG',
}

export enum ImageCropFocus {
  ATTENTION = 'ATTENTION',
  CENTER = 'CENTER',
  EAST = 'EAST',
  ENTROPY = 'ENTROPY',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  NORTHWEST = 'NORTHWEST',
  SOUTH = 'SOUTH',
  SOUTHEAST = 'SOUTHEAST',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
}

export enum ImageFit {
  CONTAIN = 'CONTAIN',
  COVER = 'COVER',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE',
}

export enum ImageFormat {
  AUTO = 'AUTO',
  AVIF = 'AVIF',
  JPG = 'JPG',
  NO_CHANGE = 'NO_CHANGE',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export enum ImageLayout {
  CONSTRAINED = 'CONSTRAINED',
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
  BLURRED = 'BLURRED',
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  NONE = 'NONE',
  TRACED_SVG = 'TRACED_SVG',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original: Maybe<ImageSharpOriginal>;
  parent: Maybe<Node>;
  resize: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AvifOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PngOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___base64 = 'fixed___base64',
  fixed___height = 'fixed___height',
  fixed___originalName = 'fixed___originalName',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___width = 'fixed___width',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___base64 = 'fluid___base64',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationHeight = 'fluid___presentationHeight',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___sizes = 'fluid___sizes',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___tracedSVG = 'fluid___tracedSVG',
  gatsbyImageData = 'gatsbyImageData',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  original___height = 'original___height',
  original___src = 'original___src',
  original___width = 'original___width',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___height = 'resize___height',
  resize___originalName = 'resize___originalName',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
}

export type ImageSharpFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio: Maybe<Scalars['Float']>;
  base64: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  height: InputMaybe<FloatQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64: Maybe<Scalars['String']>;
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp: Maybe<Scalars['String']>;
  srcWebp: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  base64: InputMaybe<StringQueryOperatorInput>;
  originalImg: InputMaybe<StringQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  presentationHeight: InputMaybe<IntQueryOperatorInput>;
  presentationWidth: InputMaybe<IntQueryOperatorInput>;
  sizes: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  srcSet: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  srcWebp: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height: InputMaybe<FloatQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Int']>;
  originalName: Maybe<Scalars['String']>;
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  originalName: InputMaybe<StringQueryOperatorInput>;
  src: InputMaybe<StringQueryOperatorInput>;
  tracedSVG: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>;
  contentDigest: InputMaybe<StringQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  fieldOwners: InputMaybe<StringQueryOperatorInput>;
  ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  mediaType: InputMaybe<StringQueryOperatorInput>;
  owner: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive: InputMaybe<Scalars['Boolean']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>;
  glob: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne: InputMaybe<Scalars['JSON']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax: InputMaybe<Scalars['Float']>;
  background: InputMaybe<Scalars['String']>;
  blackOnWhite: InputMaybe<Scalars['Boolean']>;
  color: InputMaybe<Scalars['String']>;
  optCurve: InputMaybe<Scalars['Boolean']>;
  optTolerance: InputMaybe<Scalars['Float']>;
  threshold: InputMaybe<Scalars['Int']>;
  turdSize: InputMaybe<Scalars['Float']>;
  turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
}

export type Query = {
  __typename?: 'Query';
  allCollectionJson: CollectionJsonConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  collectionJson: Maybe<CollectionJson>;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  imageSharp: Maybe<ImageSharp>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
};

export type QueryAllCollectionJsonArgs = {
  filter: InputMaybe<CollectionJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<CollectionJsonSortInput>;
};

export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};

export type QueryCollectionJsonArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<CollectionJsonImageFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsonId: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childCollectionJson: InputMaybe<CollectionJsonFilterInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenCollectionJson: InputMaybe<CollectionJsonFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime: Maybe<Scalars['String']>;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  port: Maybe<Scalars['Int']>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  trailingSlash: Maybe<Scalars['String']>;
};

export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  host = 'host',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  jsxRuntime = 'jsxRuntime',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pathPrefix = 'pathPrefix',
  polyfill = 'polyfill',
  port = 'port',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___title = 'siteMetadata___title',
  trailingSlash = 'trailingSlash',
}

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  functionRoute = 'functionRoute',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginName = 'pluginName',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  pageContext: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  component = 'component',
  componentChunkName = 'componentChunkName',
  id = 'id',
  internalComponentName = 'internalComponentName',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  matchPath = 'matchPath',
  pageContext = 'pageContext',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  path = 'path',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___packageJson = 'pluginCreator___packageJson',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___pluginOptions = 'pluginCreator___pluginOptions',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___version = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name: Maybe<Scalars['String']>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson: Maybe<Scalars['JSON']>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars['String']>;
  pluginOptions: Maybe<Scalars['JSON']>;
  resolve: Maybe<Scalars['String']>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  browserAPIs = 'browserAPIs',
  children = 'children',
  children___children = 'children___children',
  children___children___children = 'children___children___children',
  children___children___children___children = 'children___children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___id = 'children___children___id',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___children___parent___children = 'children___children___parent___children',
  children___children___parent___id = 'children___children___parent___id',
  children___id = 'children___id',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  children___parent___children = 'children___parent___children',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___id = 'children___parent___id',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___parent___id = 'children___parent___parent___id',
  id = 'id',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  nodeAPIs = 'nodeAPIs',
  packageJson = 'packageJson',
  parent___children = 'parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___id = 'parent___children___id',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___id = 'parent___id',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___parent___id = 'parent___parent___parent___id',
  pluginFilepath = 'pluginFilepath',
  pluginOptions = 'pluginOptions',
  resolve = 'resolve',
  ssrAPIs = 'ssrAPIs',
  version = 'version',
}

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars['Float']>;
  min: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>;
  glob: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne: InputMaybe<Scalars['String']>;
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit: InputMaybe<ImageFit>;
  grayscale: InputMaybe<Scalars['Boolean']>;
  rotate: InputMaybe<Scalars['Int']>;
  trim: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality: InputMaybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed';
  base64: string;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
  tracedSVG: string;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed';
  base64: string;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
  tracedSVG: string;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
};

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid';
  base64: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: 'ImageSharpFluid';
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
  tracedSVG: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid';
  base64: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
  tracedSVG: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes: string;
};

export type CollectionQueryVariables = Exact<{ [key: string]: never }>;

export type CollectionQuery = {
  __typename?: 'Query';
  allCollectionJson: {
    __typename?: 'CollectionJsonConnection';
    nodes: Array<{
      __typename?: 'CollectionJson';
      jsonId: string;
      title: string;
      image: {
        __typename?: 'CollectionJsonImage';
        name: string;
        src: {
          __typename?: 'File';
          childImageSharp: { __typename?: 'ImageSharp'; gatsbyImageData: any };
        };
      };
    }>;
  };
};
