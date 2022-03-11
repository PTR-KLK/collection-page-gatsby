import React from 'react';

import Layout from 'src/components/layout';
import Breadcrumbs from 'src/components/breadcrumbs';
import HeroWrapper from 'src/components/heroWrapper';
import Hero from 'src/components/hero';

import * as styles from '../styles/about.module.scss';

type Props = {
  uri: string;
};

const About: React.FC<Props> = ({ uri }) => {
  return (
    <Layout title="About">
      <HeroWrapper>
        <Hero className={styles.hero} />
        <h2>About</h2>
      </HeroWrapper>
      <Breadcrumbs currentUri={uri} />
      <section className={styles.section}>
        <h3 className={styles.heading}>Heading</h3>
        <p className={styles.paragraph}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </section>
    </Layout>
  );
};

export default About;
