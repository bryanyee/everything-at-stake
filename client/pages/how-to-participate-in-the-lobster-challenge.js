import Layout from 'components/Layout';

import { findPage } from 'config/pages';

const page = findPage('how-to-participate-in-the-lobster-challenge');

export default function HowToParticipateInTheLobsterChallenge() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>Hello first blog</p>
    </Layout>
  );
}
