import Emoji from 'components/Emoji';
import Layout from 'components/Layout';

import { UNICODE_VALUES } from 'config/constants';
import { findPage } from 'config/pages';

const page = findPage('cardano-summit-the-beginning-of-a-new-era');

export default function CardanoSummitTheBeginningOfANewEra() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>Cardano Summit <Emoji unicode={UNICODE_VALUES.mountain} /> is just around the corner on September 25 & 26.</p>
      <p>What’s exciting about this next round of news is that it’s not just another update or another new platform. It’s an advancement of the whole decentralized technology space. It answers the question: as a normal human being (outside of crypto), <strong><em>why should I care?</em></strong></p>
      <p>Bitcoin brought a digitized alternative to gold.</p>
      <p>Ethereum introduced new functionality that primarily remained within the crypto world, and NFTs generated the next source of mainstream attention.</p>
      <p>The developments coming out of Cardano Summit will introduce many more practical applications that may impact the average person.</p>
      <p>Payments, voting, identity, gaming, infrastructure - and not just research and standalone projects, but actual partnerships with governments and corporations. Concrete plans to impact human beings.</p>
      <p>Accomplishing all these functions on a platform that’s environmentally sound, has a well-researched path forward for scaling, and is growing its developer ecosystem via a dApp store and certifications.</p>
      <p>And all this news is coming out at the same time. What an amazing time to live in.</p>
      <h3 className="mt-5">What‘s next</h3>
      <p>Make sure to <a href="https://summit.cardano.org/" target="blank" rel="noopener noreferrer">sign up to attend</a> Cardano Summit, and enjoy exploring the accompanying virtual worlds! And check out the <a href="https://summit.cardano.org/agenda" target="_blank" rel="noopener noreferrer">exhaustive list of sessions</a>.</p>
    </Layout>
  );
}
