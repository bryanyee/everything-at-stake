import Emoji from 'components/Emoji';
import Layout from 'components/Layout';

import { UNICODE_VALUES } from 'config/constants';
import { findPage } from 'config/pages';

const page = findPage('delegated-staking-on-cardano');

export default function DelegatedStakingOnCardano() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>Many new eyes are taking a deeper look into the Cardano ecosystem as deFi protocols begin to launch, starting with the SundaeSwap dex. Yield farming and staking systems exist on other platforms (Ethereum 2.0, Solana, etc.), albeit with characteristics that signficiantly constrain the user experience of the applications built on top of them.</p>
      <p>The design of Cardano‘s Ouroboros proof-of-stake mechanism, on the other hand, allows participants to earn rewards and contribute to the security of the network, without sacrifising the user experience.</p>
      <p>These are the characteristics unique to Cardano staking - the properties that reduce the friction of particiaping in deFi and make it more accessible to a wider array of end users:</p>
      <p>Delegated staking on Cardano is <strong>liquid</strong> and <strong>non-custodial</strong>.</p>
      <ul>
        <li>The tokens remain in your <strong>wallet custody</strong>. Always yours, always safe (keep your private keys safe!).</li>
        <li>With <strong>freedom to move or use</strong> your funds. Withdraw, receive, swap as you wish, and your wallet remains delegated, continuing to earn sweet rewards every 5 days.</li>
        <li><strong>Without the risk of being lost</strong> from slashing (slashing only impacts the stake pool) or mismanagement/loss from a custody provider.</li>
        <li>With a very <strong>low minimum stake requirement</strong>.</li>
      </ul>
      <p>No lock-up period. No sacrifice of custody. Low barrier to entry. No need to un-stake to use the funds or re-delegate.</p>
      <p>And how about future capabilities?</p>
      <p>These characteristics will allow Cardano deFi protocols to have mechanisms for double/triple yield.</p>
      <p>i.e. put your funds to work in yield farming while ALSO taking advantage of stake rewards & securing the Cardano network. Keep your eyes out on Liqwid, Meld, Maladex, and others to see how this will manifest.</p>
      <p>Cardano‘s staking mechanism is not just a component of the protocol‘s network and consensus architecture, but also a killer product for end users. It‘s one of the many things that came out from Cardano‘s &quot;years of research&quot;, along with the seamless hard fork combinator protocol upgrades, native tokens that don‘t require smart contracts, and an eUTxO programming model that efficiently enables data to be moved across shards/chains/channels.</p>
    </Layout>
  );
}

