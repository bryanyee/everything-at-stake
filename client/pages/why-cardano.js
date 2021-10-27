import Emoji from 'components/Emoji';
import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';
import HighlightBox from 'components/HighlightBox';

import { UNICODE_VALUES } from 'config/constants';
import { findPage } from 'config/pages';

const page = findPage('why-cardano');

// Unlike Ethereum 1.0, they all seem to tackle the "scalability" problem head on, either by implementing a proof of stake consensus mechanism upfront, or by using alternative data structures from blockchains (such as DAGs). Aside from this divergence from Ethereum to avoid the plauge of high fees, however, they still share many of the same limitations.

// Additionally, functional programming in Haskell and Plutus may present a strange, novel pattern to problem solving to many developers, while Solidity, Rust, and C++ are more readily accessible to a much wider pool of developers.

// No long running applications exist right now. Every popular dApp is at most the age of a toddler.

// Curiously, the intro to the postmortem states: "Solana is designed for adversarial conditions."
// But in the immediately following paragraph, it states: "The cause of the network stall was, in effect, a denial of service attack...These transactions created a memory overflow, which caused many validators to crash forcing the network to slow down and eventually stall."
// Those statements don‘t line up.

export default function WhyCardano() {
  return (
    <Layout date={page.date} title={page.title}>
      <HighlightBox className="mb-3">
        This article is still a work in progress.
      </HighlightBox>
      <p>When asked the question, <strong><em>&quot;What makes Cardano stand out from all the other distributed ledger protocols?&quot;</em></strong>, people often refer to deep research-driven development, 100+ research papers, and formal verification that allow Cardano to have strong fundamentals. And then the puck stops there. What now?</p>
      <h4 className="my-5">Why should we care about Cardano‘s supposed &quot;strong fundamentals&quot;, when applications abound on other platforms with faster development times?</h4>
      <p>As an end user of applications, it can be hard to grasp what &quot;strong fundamentals&quot; means.</p>
      <p>I can trade on Uniswap <strong><em>right now</em></strong>. I can yield farm on Aave <strong><em>right now</em></strong>. And they‘re working just fine. Does that mean they‘re built upon platforms with strong fundamentals?</p>
      <p>It‘s difficult to compare how the experience might be on Cardano, because projects aren‘t available yet! How were Solana, Avalanche, Polygon, Binance Smart Chain, and others able to develop their core technology in a much faster time frame, allowing projects to start building?</p>
      <p>To build their foundations quickly, many of these protocols adopted similar design patterns as their predecessor, Ethereum, but without stopping to think critically, <strong><em>&quot;Is this the right way to do things?&quot;</em></strong>.</p>
      <p>These platforms inherited architectural constraints that lessen the robustness of their systems, leave them exposed to more vulnerabilities, and may ultimately result in poorer experiences for both developers and end users.</p>
      <p><em>It‘s faster to build a bike. But a car will take you further</em> <Emoji unicode={UNICODE_VALUES.automobile} />.</p>
      <h3 className="my-5">Building a sustainable system</h3>
      <p>Cardano has spent the last several years developing a robust platform with characteristics that no other protocol shares in aggregate.</p>
      <p>Other protocols are already battling it out on the playing field. But Cardano has just left the gym, and <em>damn</em>, she‘s built like a tank <Emoji unicode={UNICODE_VALUES.flexedBiceps} />.</p>
      <p>What makes Cardano so strong? <em>What makes Cardano stand out from all the other distributed ledger protocols?</em></p>
      <p>Instead of moving fast to be first-to-market and available for projects to build upon, Cardano took a deep look at the core problems faced by layer 1 protocols, problems that will <strong><em>still exist</em></strong> on Ethereum 2 and others, and diligently constructed solutions to them. The following are the solutions to these problems.</p>
      <h5 className="my-3">Non-custodial proof of stake without locking</h5>
      <p>Cardano‘s Ouroboros proof of stake mechanism is non-custodial and doesn‘t lock staked tokens. Delegators keep control of their private keys, and may move their tokens at anytime without a locking period.</p>
      <p>Casper-based proof of stake protocols, on the other hand, sacrifice the accessiblity and safety of users‘ staked tokens, by controlling the private keys of delegated stake and imposing restrictions around how quickly tokens may be withdrawn.</p>
      <p><strong>Problem case:</strong> In June 2021, crypto custody provider <ExternalLink href="https://cryptoslate.com/second-largest-eth2-staking-pool-sues-fireblocks-after-75-million-ethereum-blunder/">Fireblocks lost $75 million worth of Eth</ExternalLink> held for the StakeHound stake pool.</p>
      <p>Cardano‘s Ouroboros remains the singular protocol immune to loss from custodial staking. Remember kids: <ExternalLink href="https://medium.com/stakefish/not-your-keys-not-your-coins-fad3d43c2713">&quot;Not your keys, not your coins&quot;</ExternalLink>.</p>
      <h5 className="my-3">eUTxO accounting, deterministic smart contracts, and predictable fees</h5>
      <p>Cardano uses the eUTxO accounting model, instead of the Account model (shared by Ethereum, Solana, Avalanche, Polygon, Algorand, and others). The functional programming paradigm used to bring programmability to UTxO ledgers allows for truly deterministic smart contracts that aren‘t exposed to a certain class of issues stemming from managing global state.</p>
      <p><strong>Problem case 1:</strong> Earlier in October 2021, an <ExternalLink href="https://www.theblockcrypto.com/post/120438/ethereum-user-pays-430000-in-transaction-fees-for-a-failed-payment">Ethereum user spent $430,000 in fees for a transaction that ultimately failed</ExternalLink>.</p>
      <p>The transaction made an assumption about the state of the world - that tokens would be available for purchase during the MISO token sale. However, due to extreme demand, the token had already sold out, causing the transaction to fail, but still charging gas fees for running the transaction.</p>
      <p>While the scaling capabilities of upcoming Ethereum 2 and existing proof of stake blockchains significantly reduce fees, protocols using the Account model remain exposed to transaction failures due to incorrect assumptions about state.</p>
      <p><strong>Problem case 2:</strong> The <ExternalLink href="https://www.gemini.com/cryptopedia/the-dao-hack-makerdao">DAO hack of 2016 resulted in the hard fork of Ethereum</ExternalLink>, reversing transactions, and splitting off a separate blockchain, Ethereum Classic.</p>
      <p>The <ExternalLink href="https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability/">recursive send exploit</ExternalLink> took advantage of the fact that sender and receiver balances under the Account model could be updated separately, as long as their final sums remained net equal to the initial sum.</p>
      <p>In contrast, transactions under the eUTxO model strictly enforce that unique tokens are always controlled by a single owner, in the same way that we can always keep track of physical cash when exchanging between two parties.</p>
      <p>Of course, various tooling such as contract validation, IDE tools, and audits can help mitigate issues under the Account model. But having transaction determinism built directly into eUTxO accounting is certainly an advantage for mission-critical systems.</p>
      <h5 className="my-3">Native tokens and babel fees</h5>
      <p>Cardano supports native tokens: a token standard that doesn‘t rely on wrapping token behavior in a smart contract like the ERC20 or BEP20 tokens, but rather treats all tokens in the same way as Cardano‘s native coin. While both smart contract-based tokens and native tokens present a standard token interface on each platform, native tokens have a reduced surface area for bugs, and can be handled directly on the blockchain‘s ledger.</p>
      <p>And since these tokens are first class citizens of the protocol, they can be used to pay for transaction fees, in the upcoming mechanism called <em>babel fees</em>.</p>
      <p><strong>Problem case:</strong> I once tried to swap USDT for another ERC20 token on Uniswap. However, my wallet didn‘t have any ETH to cover the transaction fee, and I wasn‘t even able change a small amount of USDT into ETH to enable the swap, because that required ETH too! Instead, I purchased ETH on a centralized exchange and moved it to my wallet in order to move forward with the transaction on Uniswap.</p>
      <p>Babel fees avoids this scenario completely.</p>
      <h5 className="my-3">Graceful degredation under extreme network activity</h5>
      <p>How about scaling - the feature that all &quot;Ethereum killers&quot; use to try to claim marketshare from Ethereum? It‘s hard to compare direct performance based on provided tps numbers - are these simple transactions or complex contracts? What‘s the block size, and can it be increased? What are the hardware requirements of each network‘s nodes? And while Ethereum is experiencing high transaction fees, none of these alternative protocols currently have the same real world traffic that would warrant such congestion.</p>
      <p>Instead, it can be helpful to consider how platforms generally handle infrequent periods of extreme traffic, far-exceeding base level network activity.</p>
      <p><strong>Problem case:</strong> In September 2021, <ExternalLink href="https://beincrypto.com/solana-down-developers-restart-mainnet-beta/">Solana experienced a network outage lasting 17 hours</ExternalLink>, until the network could be upgraded and restarted.</p>
      <p>In their <ExternalLink href="https://solana.com/news/9-14-network-outage-initial-overview">postmortem</ExternalLink>, it‘s noted that the system underwent a denial of service attack, stemming from hyper activity from bots trading around the Grape Protocol IDO, sometimes reaching 400,000 transactions per second.</p>
      <p><em>&quot;The cause of the network stall was, in effect, a denial of service attack...These transactions created a memory overflow, which caused many validators to crash forcing the network to slow down and eventually stall.&quot;</em></p>
      <p>How would Cardano have handled this? Cardano may not currently be able to process a significant amount of transactions per second, but it‘s designed for graceful degradation.</p>
      <p>Nodes can hold two blocks worth of transactions in the mempool (transaction queue). During periods of extreme network activity, transactions may only be accepted into the mempool as space frees up. dApp clients have the responsibility of retrying transaction submissions or providing a user experience for failures. This isn‘t a sunny day experience for end users, but at least the network is designed to stay afloat in times of high traffic, continuing to process transactions until the network spike has ended, such as during a large NFT drop or denial of service attack.</p>
      <p>Can Solana adopt this or another solution for handling extreme traffic? It can. But a band-aid approach to development isn‘t appropriate for building platforms on top of which significant sums of funds are already being managed.</p>
      <h5 className="my-3">Scaling for the future</h5>
      <p>Protocols must still be able to scale as base network activity increases over time.</p>
      <p>While Solana‘s current plan for future scaling entails relying on node operators to upgrade their already high-requirement hardware (256GB RAM), Cardano‘s Hydra allows for significant linear scaling - as the number of applications and transactions grow, Hydra heads may be added to the network without needing to upgrade hardware. Hydra heads may even be comprised of nodes that already exist on the network. The nodes just adopt additional responsibilities to participate in a Hydra head.</p>
      <h3 className="my-5">Does any of this really matter?</h3>
      <p>All these technical achievements sound great, but Cardano still doesn‘t have useable applications. Meanwhile, Ethereum 2 is just around the corner, and Solana‘s experiencing a booming ecosystem.</p>
      <p>Let‘s take a look at these questions: <strong><em>How much are you willing to put up with the problems above? What level of risk do you accept for products that work on most days, but aren‘t guaranteed to?</em></strong></p>
      <p>As the ecosystem grows, issues will continue to happen. Funds will be lost. Networks must handle an increasing number of transactions.</p>
      <p>Can we trust the first-to-market platforms to support the needs of the future? Will enterprises and governments accept the current risks as status quo, or should they demand high safety guarantees for the infrastructure that runs giant financial applications and massive amounts of data?</p>
      <p>Platforms can of course evolve over time. But as the development of Ethereum 2 has shown, re-working the core architecture of a layer 1 protocol can be overwhelmingly complex. Huge props to the team for taking on the challenge.</p>
      <p><em>Changing the engine of a moving train is no easy feat <Emoji unicode={UNICODE_VALUES.locomotive} />.</em></p>
      <p>Now take the concept of layer 1&apos;s as a decentralized operating system, and bring it to the local level - a personal computer.</p>
      <p>There may be plenty of computers on the market right now with cool programs and applications, but they crash from time to time, leave control of yield-earning assets up to external machines, and are built upon a coding paradigm that remains vulnerable to certain classes of attack. However, the next generation computer has just launched their core OS, and a <ExternalLink href="https://www.cardanocube.io/cardano-ecosystem-interactive-map">plethora of applications</ExternalLink> are in the works.</p>
      <h3 className="my-5">What‘s next?</h3>
      <p>It‘s funny that people still call Cardano a <em>ghost</em> chain, when in actuality, it‘s more like a <em>hulk</em> chain.</p>
      <p>The wave of projects is coming, and they‘re built on solid fundamentals. On top of that, there‘s plans to open up the protocol to the larger <ExternalLink href="https://www.youtube.com/watch?v=k8a6tX53YPs">ocean of programming languages</ExternalLink> via the IELE virtual machine, a model for governance that projects running on Cardano can adopt themselves, algorithmic stablecoins (Djed) that are formally verified to maintain their peg and be resistant to extreme market activity, and the ability to perform seamless protocol upgrades via the hardfork combinator.</p>
      <p>The next few months and beyond are very exciting as applications launch and partnerships form with real world enterprises and governments to bring solutions for deFi, payments, identity, voting, gaming, infrastructure, and more to the masses.</p>
      <h3 className="my-5">Resources</h3>
      <p>Below is a short selection of whitepapers and resources that constitute only a portion of the immense work that Cardano has done so far, many of which are already implemented.</p>
      <ul>
        <li><ExternalLink href="https://iohk.io/en/research/library/">IOHK Whitepaper Library</ExternalLink></li>
        <li><ExternalLink href="https://eprint.iacr.org/2016/889.pdf">Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol</ExternalLink></li>
        <li><ExternalLink href="https://iohk.io/en/research/library/papers/the-extended-utxo-model/">The Extended UTXO Model</ExternalLink></li>
        <li><ExternalLink href="https://arxiv.org/pdf/2003.14271.pdf">UTxO- vs account-based smart contract
blockchain programming paradigms</ExternalLink></li>
        <li><ExternalLink href="https://files.zotero.net/eyJleHBpcmVzIjoxNjM1MzYxMDU2LCJoYXNoIjoiMDBmMTM0NGZkYTg2ZTBhOWJkZWI4ZDhhYjIzZjIzYzAiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uXC9wZGYiLCJjaGFyc2V0IjoiIiwiZmlsZW5hbWUiOiJDaGFrcmF2YXJ0eSBldCBhbC4gLSAyMDIwIC0gTmF0aXZlIEN1c3RvbSBUb2tlbnMgaW4gdGhlIEV4dGVuZGVkIFVUWE8gTW9kZWwucGRmIn0%3D/d1489a161910f53601dda308c58d917da70058b5ccf931649a1b4326754989b0/Chakravarty%20et%20al.%20-%202020%20-%20Native%20Custom%20Tokens%20in%20the%20Extended%20UTXO%20Model.pdf">Native Custom Tokens in the Extended UTXO Model</ExternalLink></li>
        <li><ExternalLink href="https://iohk.io/en/blog/posts/2021/02/25/babel-fees/">Babel fees - denominating transaction costs in native tokens</ExternalLink></li>
        <li><ExternalLink href="https://eprint.iacr.org/2020/299.pdf">Hydra: Fast Isomorphic State Channels</ExternalLink></li>
        <li><ExternalLink href="https://eprint.iacr.org/2021/1069.pdf">Djed: A Formally Verified Crypto-Backed Pegged Algorithmic Stablecoin</ExternalLink></li>
        <li><ExternalLink href="https://github.com/cardano-foundation/docs-cardano-org/blob/main/explore-cardano/what-is-a-hard-fork-combinator.md">What is a hard fork combinator?</ExternalLink></li>
      </ul>
    </Layout>
  );
}
