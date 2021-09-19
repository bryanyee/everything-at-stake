import IndexLink from 'components/IndexLink'
import Layout from 'components/Layout';

import { PAGES } from 'config/pages';

export default function Home() {
  return (
    <Layout
      header={<h1>Everything At Stake</h1>}
    >
      <p>
        <span>A software engineering blog about the Cardano blockchain and ecosystem.</span>
      </p>
      <div className="mt-5">
        {PAGES.map(({ date, enabled, id, title, }) => {
          if (!enabled) return null;
          return <IndexLink className="mb-5" date={date} id={id} key={id} title={title} />;
        })}
      </div>
    </Layout>
  );
}
