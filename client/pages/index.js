import IndexLink from 'components/IndexLink'
import Layout from 'components/Layout';

import { PAGES } from 'config/pages';

const pages = [...PAGES];
pages.reverse();

export default function Index() {
  return (
    <Layout
      header={<h1>Everything At Stake</h1>}
    >
      <p>
        <span>A software engineering blog about the Cardano blockchain and ecosystem.</span>
      </p>
      <div className="mt-5">
        {pages.map(({ date, enabled, id, title, }) => {
          if (!enabled) return null;
          return <IndexLink className="mb-5" date={date} id={id} key={id} title={title} />;
        })}
      </div>
    </Layout>
  );
}
