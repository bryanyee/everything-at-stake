import Emoji from 'components/Emoji';
import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';

import { UNICODE_VALUES } from 'config/constants';
import { findPage } from 'config/pages';

const page = findPage('why-cardano');

// Unlike Ethereum 1.0, they all seem to tackle the "scalability" problem head on, either by implementing a proof of stake consensus mechanism upfront, or by using alternative data structures from blockchains (such as DAGs). Aside from this divergence from Ethereum to avoid the plauge of high fees, however, they still share many of the same limitations.

// Additionally, functional programming in Haskell and Plutus may present a strange, novel pattern to problem solving to many developers, while Solidity, Rust, and C++ are more readily accessible to a much wider pool of developers.

// No long running applications exist right now. Every popular dApp is at most the age of a toddler.

export default function WhyCardano() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>When asked the question, <strong><em>"What makes Cardano stand out from all the other distributed ledger protocols?"</em></strong>, people often refer to deep research-driven development, the 100+ research papers, and formal verification that allow Cardano to have strong fundamentals. And then the puck stops there. What now?</p>
      <h4 className="my-5">Why should we care about Cardano‘s supposed "strong fundamentals", when applications abound on other platforms with faster development times?</h4>
      <p>As an end user of applications, it can be hard to grasp what "strong fundamentals" means.</p>
      <p>I can trade on Uniswap <strong><em>right now</em></strong>. I can yield farm on Aave <strong><em>right now</em></strong>. And they‘re working just fine. Does that mean they‘re built upon platforms with strong fundamentals?</p>
      <p>It‘s difficult to compare how these projects might be on Cardano, because they‘re not available yet! The lack of applications has had a meaningful impact on the perception around Cardano development. How were Solana, Avalanche, Polygon, Algorand, and others able to develop their core technology in a much faster time frame?</p>
      <p>To develop quickly, many of these protocols adopted similar design patterns as their predecessor, Ethereum, but without stopping to think critically, <strong><em>"Is this the right way to do things?"</em></strong>.</p>
      <p>These platforms inherited architectural constraints that lessen the robustness of their systems, leave them more exposed to vulnerabilities, and may ultimately result in poorer experiences for both developers and end users.</p>
      <p><Emoji unicode={UNICODE_VALUES.biker} /> <em>It‘s faster to build a bike. But a car will take you further.</em> <Emoji unicode={UNICODE_VALUES.automobile} /></p>
      <h3 className="my-5">Building a sustainable system</h3>
      <p>Cardano has spent the last several years developing a robust platform with characteristics that no other protocol has.</p>
      <p><Emoji unicode={UNICODE_VALUES.soccerBall} /> Other protocols are already battling it out on the playing field. But Cardano has just left the gym, and <em>damn</em>, she‘s built like a tank <Emoji unicode={UNICODE_VALUES.flexedBiceps} />.</p>
      <p>What makes Cardano so strong? <em>What makes Cardano stand out from all the other distributed ledger protocols?</em></p>
      <h5 className="my-3">Non-custodial proof of stake without locking</h5>
      <p>Cardano‘s Ouroboros proof of stake mechanism is non-custodial and doesn‘t lock staked tokens. Delegators keep control of their private keys, and may move their tokens at anytime without a locking period.</p>
      <p>Casper-based proof of stake protocols, on the other hand, sacrifice the accessiblity and safety of users‘ staked tokens, by controlling the private keys of delegated stake and imposing restrictions around how quickly tokens may be withdrawn.</p>
      <p><strong>Problem case:</strong> In June 2021, crypto custody provider <ExternalLink href="https://cryptoslate.com/second-largest-eth2-staking-pool-sues-fireblocks-after-75-million-ethereum-blunder/">Fireblocks lost $75 million worth of Eth</ExternalLink> held for the StakeHound stake pool.</p>
      <p>Rembember kids: <ExternalLink href="https://medium.com/stakefish/not-your-keys-not-your-coins-fad3d43c2713">"Not your keys, not your coins"</ExternalLink>.</p>
      <h5 className="my-3">Deterministic fees and deterministic smart contracts</h5>
      <p>Cardano uses the eUTxO accounting model (instead of the Account model). This allows for truly deterministic (predictable) fees and deterministic smart contracts, that aren‘t exposed to a certain class of issues stemming from managing global state.</p>
      <p><strong>Problem case:</strong> The <ExternalLink href="https://www.gemini.com/cryptopedia/the-dao-hack-makerdao">DAO hack of 2016 resulted in the hard fork of Ethereum</ExternalLink>, reversing transactions, and splitting off a separate blockchain, Ethereum Classic.</p>
      <p>The <ExternalLink href="https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability/">recursive send exploit took advantage of the fact that sender and receiver balances under the Account model could be updated separately</ExternalLink>, as long as their final sums remained net equal to the initial sum.</p>
      <p>In contrast, transactions under the eUTxO model strictly enforce that unique tokens are always controlled by a single owner, in the same way that we can always keep track of physical cash when exchanging between two parties.</p>
      <p>Of course, various tooling such as contract validation, IDE tools, and audits can help mitigate issues under the Account model. But having transaction determinism built directly into eUTxO accounting is certainly an advantage for mission-critical systems.</p>
      <h5 className="my-3">Native tokens and babel fees</h5>
      <p>Cardano supports native tokens: a token standard that doesn‘t rely on wrapping token behavior in a smart contract like the ERC20 token, but rather treats all tokens in the same way as Cardano‘s native coin. While both smart contract-based tokens and native tokens present a standard token interface on each platform, native tokens have a reduced surface area for bugs, and can be handled directly on the blockchain‘s ledger.</p>
      <p>And since these tokens are first class citizens of the protocol, they can be used to pay for transaction fees, in the upcoming mechanism called <em>babel fees</em>.</p>
      <p><strong>Problem case:</strong> I once tried to swap USDT for another ERC20 token on Uniswap. However, my wallet didn‘t have any ETH to cover the transaction fee, and I wasn‘t even able change a small amount of USDT into ETH to enable the swap, because that required ETH too! Instead, I purchased ETH on a centralized exchange and moved it to my wallet in order to move forward with the transaction on Uniswap.</p>
      <p>Babel fees avoids this scenario completely.</p>
      <h5 className="my-3">Performance under pressure</h5>
      <p>How about scaling - the feature that all "Ethereum killers" use to try to claim marketshare from Ethereum? It‘s hard to compare direct performance based on provided tps numbers - are these simple transactions or complex contracts? What‘s the block size, and can it be increased? What are the hardware requirements of each network‘s nodes? And while Ethereum is experiencing high transaction fees, none of these alternative protocols currently have the same real world traffic that would warrant such congestion.</p>
      <p>Instead, it may be more helpful to consider how platforms generally handle abnormal periods of extreme traffic, far-exceeding base level network activity.</p>
      <p><strong>Problem case:</strong> On September 14, 2021, <ExternalLink href="https://beincrypto.com/solana-down-developers-restart-mainnet-beta/">Solana experienced a network outage lasting 17 hours</ExternalLink>, until the network could be upgraded and restarted.</p>
      <p>In their <ExternalLink href="https://solana.com/news/9-14-network-outage-initial-overview">postmortem</ExternalLink>, it‘s noted that the system underwent a denial of service attack, stemming from hyper activity from bots trading around the Grape Protocol IDO, sometimes reaching 400,000 transactions per second.</p>
      <p>Curiously, the intro to the postmortem states: <em>"Solana is designed for adversarial conditions."</em></p>
      <p>But in the immediately following paragraph, it states: <em>"These transactions created a memory overflow, which caused many validators to crash forcing the network to slow down and eventually stall."</em></p>
      <p>Those statements don‘t seem to line up.</p>
      <p>How would Cardano have handled this? Cardano may not currently be able to handle a significant amount of transactions, but it‘s designed for graceful degradation.</p>
      <p>Nodes can hold two blocks worth of transactions in the mempool (transaction queue). During periods of extreme network activity, transactions may only be accepted into the mempool as space frees up. dApp clients have the responsibility of retrying transaction submissions or providing a user experience for failures. This isn‘t a sunny day experience for end users, but at least the network is designed to stay afloat in times of high traffic, continuing to process transactions until the network spike has ended, such as during a large NFT drop or denial of service attack.</p>
      <p>Can Solana adopt this or another solution for handling extreme traffic? It can. But a band-aid approach to development isn‘t appropriate for building platforms on top of which significant sums of funds are already being managed.</p>
      <h5 className="my-3">Scaling for the future</h5>
      <p>Protocols must still be able to scale as base network activity increases over time.</p>
      <p>While Solana‘s current plan for future scaling entails relying on node operators to upgrade their already high-requirement hardware (256GB RAM), Cardano‘s Hydra allows for significant linear scaling - as the number of applications and transactions grow, Hydra heads may be added to the network without needing to upgrade hardware. Hydra heads may even be comprised of nodes that already exist on the network. The nodes just adopt additional responsibilities to participate in a Hydra head.</p>
      <h3 className="my-5">Does any of this really matter?</h3>
      <p>All these technical achievements sound great, but Cardano still doesn‘t have any useable applications. Meanwhile, Ethereum 2.0 is just around the corner, and Solana‘s experiencing a booming ecosystem.</p>
      <p>Let‘s take a look at these questions: <strong><em>How much are you willing to put up with the problems above? What level of risk do you accept for products that work on most days, but aren‘t guaranteed to?</em></strong></p>
      <p>As the ecosystem grows, issues will continue to happen. Funds will be lost. Networks must handle an increasing amount of transactions.</p>
      <p>Can we trust the first-to-market platforms to support the needs of the future?</p>
      <p>Platforms can of course evolve over time. But as the development of Ethereum 2.0 has shown, re-working the core architecture of a layer 1 protocol can be overwhelmingly complex. Huge props to the team for taking on the challenge.</p>
      <p><em><Emoji unicode={UNICODE_VALUES.locomotive} /> Changing the engine on a moving train is no easy feat.</em></p>
      <h3 className="my-5">It‘s the people too</h3>
      <p>The amazing thing about Cardano‘s development is that it has outgrown it‘s founder, Charles Hoskinson, who was even on a plane during a recent protocol upgrade. The platform and ecosystem may accelerate beyond the scope of what a single person can manage, through distributed leadership and the strength of the community.</p>
      <p>Numerous researchers and engineers created the 100+ research papers that serve as the foundation for the Cardano blockchain.</p>
      <p>Frederik Gregaard, Romain Pellerin, Tim Harrison, Dynal Patel, and countless others lead the business, product, and engineering development at the Cardano Foundation and IOG.</p>
      <p>John O‘Connor heads strategy and operations for Cardano in Africa, a key component for bringing social and technological change across the world.</p>
      <p>Project Catalyst allows the community to self-determine priorities for growth and innovation.</p>
      <p>And <ExternalLink href="https://www.cardanocube.io/">hundreds of projects</ExternalLink> are under development by teams around the world.</p>
      <h3 className="my-5">What‘s next?</h3>
      <p>Cardano may be lacking live projects right now, but the wave is coming, and they‘re built on solid fundamentals. On top of that, there‘s plans to open up the protocol to the larger ocean of programming languages via the IELE virtual machine, a model for governance that can be adopted by projects running on Cardano themselves, and seamless protocol upgrades enabled by Cardano‘s hardfork combinator.</p>
      <p>The next few months and beyond are very exciting as applications launch and partnerships form with real world enterprises and governments to bring solutions for deFi, payments, identity, voting, gaming, infrastructure, and more to the masses.</p>
    </Layout>
  );
}
