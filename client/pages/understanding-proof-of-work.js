import Link from 'next/link';

import Layout from 'components/Layout';
import CardanoNode from 'components/CardanoNode';

import { findPage } from 'config/pages';

const page = findPage('understanding-proof-of-work');

export default function UnderstandingProofOfWork() {
  return (
    <Layout date={page.date} title={page.title}>
      <div className="mt-5">My content</div>
      <div className="mt-5">
        <CardanoNode />
      </div>
    </Layout>
  );
}
