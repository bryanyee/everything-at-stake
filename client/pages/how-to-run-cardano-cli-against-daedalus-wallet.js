import Layout from 'components/Layout';

import { findPage } from 'config/pages';

const page = findPage('how-to-run-cardano-cli-against-daedalus-wallet');

export default function HowToRunCardanoCliAgainstDaedalusWallet() {
  return (
    <Layout date={page.date} title={page.title}>
      <div className="mt-5">My content</div>
    </Layout>
  );
}
