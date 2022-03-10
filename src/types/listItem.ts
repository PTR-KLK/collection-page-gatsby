export type ItemProps = {
  id: string;
  title: string;
  image: {
    name: string;
    src: {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      childImageSharp: { gatsbyImageData: any };
    };
  };
};
