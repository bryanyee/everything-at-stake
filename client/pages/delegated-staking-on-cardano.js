import Emoji from 'components/Emoji';
import Layout from 'components/Layout';

import { UNICODE_VALUES } from 'config/constants';
import { findPage } from 'config/pages';

const page = findPage('delegated-staking-on-cardano');

export default function DelegatedStakingOnCardano() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>Many Cardano-curious folk are taking a deeper look into the ecosystem & yield mechanisms ahead of the SundaeSwap launch. They may be familiar with staking systems with very limiting characteristics on other protocols, and are now getting their minds BLOWN with the delegated staking system on Cardano‘s Ouroboros.</p>
      <p>Here is a friendly reminder for all the new entrants to the Cardano ecosystem.</p>
      <p>Delegated staking on Cardano is <strong>liquid</strong> and <strong>non-custodial</strong>.</p>
      <p>The tokens remain in your wallet custody. Always yours, always safe (keep your private keys safe!).</p>
      <p>With freedom to move or use your funds. Withdraw, receive, swap as you wish, and your wallet remains delegated, continuing to earn sweet rewards every 5 days.</p>
      <p>Without the risk of being lost from slashing (slashing only impacts the stake pool) or mismanagement/loss from a custody provider.</p>
      <p>With a very low barrier to entry.</p>
      <p>No lock-up period. No sacrifice of custody. No high required amount. No need to un-stake to use the funds or re-delegate.</p>
      <p>And how about future capabilities?</p>
      <p>These characteristics will allow Cardano deFi protocols to have mechanisms for double/triple yield.</p>
      <p>i.e. put your funds to work in yield farming while ALSO taking advantage of stake rewards & securing the Cardano network. Keep your eyes out on Liqwid, Meld, Maladex, and others to see how this will manifest.</p>
      <p>P.S Really, tell your friends from outside Cardano. This is a killer staking product. One of the things that came out from Cardano‘s &quotyears of research&quot (along with the seamless hard fork combinator protocol upgrades, native tokens that don‘t require smart contracts, an eUTxO model that efficiently enables data to be moved across shards/chains/channels).</p>
    </Layout>
  );
}

