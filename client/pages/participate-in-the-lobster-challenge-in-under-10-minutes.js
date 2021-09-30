import Emoji from 'components/Emoji';
import Layout from 'components/Layout';
import HighlightBox from 'components/HighlightBox';

import { UNICODE_VALUES } from 'config/constants';
import { findPage } from 'config/pages';

const page = findPage('participate-in-the-lobster-challenge-in-under-10-minutes');

export default function HowToParticipateInTheLobsterChallenge() {
  return (
    <Layout date={page.date} title={page.title}>
      <HighlightBox className="mb-3">
        <strong>Note:</strong> The target audience for this article are those who have already set up a cardano node. There are <strong><em>only two CLI commands</em></strong> used in this process - one to view UTxOs and one to submit the vote transaction. Several fixes for potential issues are also listed below. If you‘d like to jump right in, <a href="#steps-to-vote">start here!</a>
      </HighlightBox>
      <p>On September 12, 2021, the Alonzo hard fork of the Cardano blockchain successfully brought smart contract functionality to the mainnet.</p>
      <p>One of the first smart contracts deployed was the Lobster Challenge, a program for the community to vote on naming Charles Hoskinson‘s beloved lobster <Emoji unicode={UNICODE_VALUES.lobster} />.</p>
      <p>Lars Brünjes, IOHK‘s lead instructor and creator of the smart contract, provided a couple thorough resources to participate:</p>
      <ul>
        <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=6xEAnMaov3E">
          Lobster Challenge: How to participate (YouTube)
        </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/input-output-hk/lobster-challenge">
            input-output-hk / lobster-challenge (GitHub)
          </a>
        </li>
      </ul> 
      <p>At the time of writing this post, there‘s still 173 votes to go until the required 500 votes is reached!</p>
      <p>It‘s my goal to help make voting as easy as possible, so that the lobster can be named in time for Cardano Summit on September 25. This article will serve as a <strong>quick notes</strong> version for the voting instructions. Let‘s get this lobster a name!</p>
      <h3 className="mt-5">Prerequisites</h3>
      <p>There currently isn‘t a dApp user interface for voting. Instead, you‘ll need to be able to run a cardano node and run the cardano CLI.</p>
      <p>If you haven‘t already set up a cardano node, please know that participating in the lobster vote <strong>requires technical knowledge. Additionally, it takes several hours to set up a node for the first time and sync the blockchain</strong>. Please make sure your machine meets the minimum requirements to run a cardano node.</p>
      <ol>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://developers.cardano.org/docs/get-started/installing-cardano-node">
            Install cardano-node (Developer docs).
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://developers.cardano.org/docs/get-started/running-cardano/">
            Run cardano-node (Developer docs).
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://developers.cardano.org/docs/stake-pool-course/handbook/keys-addresses">
            Create local keys and addresses (Developer docs).
          </a>
        </li>
      </ol>
      <h3 className="mt-5">Voting mechanics</h3>
      <p>The vote state consists of a <strong>lobster counter</strong> and <strong>vote counter</strong>, each starting at 0.</p>
      <p>Each time someone submits a transaction, the lobster counter increments by a value between 1 and 100, and the vote counter increments by 1.</p>
      <p>When the vote counter reaches 500, the smart contract will stop the vote and determine the Lobster‘s name by adding a hidden random seed to the lobster counter, dividing by the total number of possible names (1219), and using the remainder as the index to find the final name in the <a href="https://github.com/input-output-hk/lobster-challenge/blob/main/names.md" target="_blank" rel="noopener noreferrer">name list</a>.</p>
      <h3 id="steps-to-vote" className="mt-5">Steps to vote</h3>
      <ol>
        <li><a href="#step-1">Clone the lobster-challenge GitHub repo.</a></li>
        <li><a href="#step-2">Ensure your payment address has some Ada to cover the transaction fee.</a></li>
        <li><a href="#step-3">Check the current state of the vote.</a></li>
        <li><a href="#step-4">Submit the transaction to vote.</a></li>
      </ol>
      <p>Fixes for several issues are <a href="#fixes-for-potential-issues">listed below</a>.</p>
      <h5 id="step-1" className="mt-4">Clone the lobster-challenge GitHub repo.</h5>
      <p>
        First, clone the <a href="https://github.com/input-output-hk/lobster-challenge" target="_blank" rel="noopener noreferrer">
          GitHub repo
        </a>.
      </p>
      <h5 id="step-2" className="mt-4">Ensure your payment address has some Ada to cover the transaction fee.</h5>
      <p>Check that your local payment address (created as a part of the prerequisites) contains a UTxO that has some Ada to cover the transaction fee. If needed, send some Ada from another wallet to your local payment address.</p>
      <pre>
        {`cardano-cli query utxo \\
  --address <payment_address> \\
  --mainnet
`}
      </pre>
      <p>Sample output (scroll horizontally to view the whole table):</p>
      <pre>
        {`
                            TxHash                                 TxIx        Amount
--------------------------------------------------------------------------------------
9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08     0        1000000 lovelace + TxOutDatumHashNone
9bba5c53a0545e0c80184b946153c9f58387e3bd1d4ee35740f29ac2e718b019     0        8168049 lovelace + TxOutDatumHashNone
        `}
      </pre>
      <p>There are two UTxOs present at this address. Later on, we‘ll use the UTxO with the larger <strong>amount</strong> as a part of the transaction to cover the fee.</p>
      <p>When supplying the transaction as an argument to the script, the value will be a combination of the transaction hash and index: <strong>TxHash + &apos;#&apos; + TxIx</strong>.</p>
      <p>Value for the <strong><em>my_utxo</em></strong> arg in the script, in this example: <strong className="text-break">9bba5c53a0545e0c80184b946153c9f58387e3bd1d4ee35740f29ac2e718b019#0</strong>
      </p>
      <h5 id="step-3" className="mt-4">Check the current state of the vote.</h5>
      <p>Check the current lobster count and vote count, using the script address <a href="https://github.com/input-output-hk/lobster-challenge#script" target="_blank" rel="noopener noreferrer">documented in the repo</a>.</p>
      <pre>
        {`cardano-cli query utxo \\
  --address addr1w8433zk2shufk42hn4x7zznjjuqwwyfmxffcjszw5l2ulesdt3jff \\
  --mainnet
`}
      </pre>
      <p>The output will show the UTxOs that are currently at the script address, shown below. The are multiple UTxOs; however, the one containing vote data is the very long entry, currently with the <strong>TxHash</strong> of <strong className="text-break">d227fc044c2c4f9f89c3c0c75069e12e50ad4e1642734311af0faf0fc3957d4f</strong> and <strong>TxIx</strong> of <strong>1</strong>.</p>
      <pre>
        {`                           TxHash                                 TxIx        Amount
--------------------------------------------------------------------------------------
319752b414804415988fb1165358e69f46095a9e9b1c01ef0830c182dc57f78b     0        1000000 lovelace + TxOutDatumHashNone
4c34feb07e32aa4855a494306aefcf16743356811914d680e112a6ec12214455     0        1000000 lovelace + TxOutDatumHashNone
63091c70aa6f8b402faffd24909d93c7721cbdced7094b62e52d157da8fb44e4     0        5000000 lovelace + TxOutDatumHashNone
67d318fabdd9905033bfe6156c6595716c952d496cabb9d98773c948974780ec     0        1000000 lovelace + TxOutDatumHashNone
cb7b44500fc9145cf5b13a533bc7616eb219b7a080bc49d7ce6204c06b351733     0        1000000 lovelace + TxOutDatumHashNone
d227fc044c2c4f9f89c3c0c75069e12e50ad4e1642734311af0faf0fc3957d4f     1        2034438 lovelace + 1 cc7888851f0f5aa64c136e0c8fb251e9702f3f6c9efcf3a60a54f419.LobsterNFT + 13715 fda1b6b487bee2e7f64ecf24d24b1224342484c0195ee1b7b943db50.LobsterCounter + 326 fda1b6b487bee2e7f64ecf24d24b1224342484c0195ee1b7b943db50.LobsterVotes + TxOutDatumHash ScriptDataInAlonzoEra "45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0"
db250ed5eb4454843af19dea7ca84a8adda170fc88284e7e5e2381b41dab5f9b     1        30768137 lovelace + TxOutDatumHashNone
`}
      </pre>
      <p>From the above output, the current lobster count is <strong>13715</strong>, and the current vote count is <strong>326</strong>.
      </p>
      <p>
        In this example, the transaction value used for the <strong><em>lobster_script_utxo</em></strong> arg in the script will be: <strong className="text-break">d227fc044c2c4f9f89c3c0c75069e12e50ad4e1642734311af0faf0fc3957d4f#1</strong>
      </p>
      <p>Remember that in UTxO transactions, the whole UTxO is consumed, and another UTxO(s) is received back by the address. Thus, an output of one transaction becomes the input for the next transaction. The <strong>TxHash</strong> will update to new values as people submit votes.</p>
      <h5 id="step-4" className="mt-4">Submit the transaction to vote.</h5>
      <p>Given the above information, make sure you‘re working in the lobster-challenge directory, and run the <strong>lobster-contribute.sh</strong> script, which builds, signs, and submits the transaction to the <strong><em>Cardano network (woah!)</em></strong>.</p>
      <p>Arguments:</p>
      <ul>
        <li><code>my_utxo</code> - The <strong>TxHash + &apos;#&apos; + TxId</strong> of your UTxO, to be consumed in the transaction to cover fees.</li>
        <li><code>lobster_script_utxo</code> - The <strong>TxHash + &apos;#&apos; + TxId</strong> of the script UTxO containing vote data.</li>
        <li><code>my_payment_address_path</code> - The path to the file containing your payment address.</li>
        <li><code>my_payment_signing_key_path</code> - The path to the file containing your payment signing key.</li>
        <li><code>old_lobster_count</code></li>
        <li><code>new_lobster_count</code>
          {` - `}<strong>{`<old_lobster_count>`}</strong> {`plus a value between 1 and 100`}
        </li>
        <li><code>old_vote_count</code></li>
      </ul>
      <p>Run the script:</p>
      <pre>{`# Script signature:
./scripts/lobster-contribute.sh <my_utxo> <lobster_script_utxo> <my_payment_address_path> <my_payment_signing_key_path> <old_lobster_count> <new_lobster_count> <old_vote_count>

# Example (all of these will be different values for you):
./scripts/lobster-contribute.sh 9bba5c53a0545e0c80184b946153c9f58387e3bd1d4ee35740f29ac2e718b019#0 d227fc044c2c4f9f89c3c0c75069e12e50ad4e1642734311af0faf0fc3957d4f#1 /projects/cardano/local-data/payment.addr /projects/cardano/local-data/payment.skey 13715 13730 326
`}
      </pre>
      <p>If the transaction is submitted correctly, wait ~30sec for it to be included in a validated block, and re-query the script address to see the new UTxO.</p>
      <p>
        <Emoji unicode={UNICODE_VALUES.lobster} /> <strong>Lobster profit!</strong>
      </p>
      <h3 className="mt-5">Never forget, concurrency</h3>
      <p>What happens when two people submit a transaction using the same UTxO from the script address?</p>
      <p>UTxOs can only be spent once, allowing for only a single transaction to consume a particular UTxO and submit to the blockchain. A later transaction will need to use the new UTxO at the script address, returned from the output of the first transaction.</p>
      <p>The lobster-challenge project isn‘t designed to handle a significant number of voters at scale, and that‘s ok! Project development on Cardano has officially just gotten started, and there are quite a few ways that projects are designing their systems to handle concurrency, using batching mechanisms both on-chain and off-chain.</p>
      <p>The following projects have outlined their approaches:</p>
      <ul>
        <li><strong>Meld:</strong> <a href="https://medium.com/meld-labs/concurrent-deterministic-batching-on-the-utxo-ledger-99040f809706" target="_blank" rel="noopener noreferrer">Concurrent & Deterministic Batching on the UTXO Ledger</a></li>
        <li><strong>Maladex:</strong> <a href="https://blog.maladex.com/maladex-solves-concurrency-scales-beyond-memory-limits-and-designs-the-best-possible-cardano-dex-391d7e519e67" target="_blank" rel="noopener noreferrer">Maladex solves concurrency scales beyond memory limits and designs the best possible Cardano DEX</a></li>
        <li><strong>Minswap:</strong> <a href="https://medium.com/minswap/introducing-laminar-an-eutxo-scaling-protocol-for-accounting-style-smart-contract-d1ac8847dde8" target="_blank" rel="noopener noreferrer">Introducing Laminar — An eUTxO scaling protocol for accounting-style smart contract</a></li>
        <li><strong>ErgoDex:</strong> <a href="https://github.com/ergolabs/ergo-dex#off-chain-execution" target="_blank" rel="noopener noreferrer">ErgoDex - Off-chain execution</a></li>
        <li><strong>ErgoDex:</strong> <a href="https://www.youtube.com/watch?v=xlDlNmIFrFM" target="_blank" rel="noopener noreferrer">What is ERGO + ERGOdex Concurrency Solution For Cardano</a></li>
      </ul>
      <p>Projects such as SundaeSwap and Occam.fi have also communicated that they have solutions in the works, some of which will be made public at a later time.</p>
      <h3 id="fixes-for-potential-issues" className="mt-5">Fixes for potential issues</h3>
      <p>Below are several changes made during my own local setup (on a Mac), both during cardano node setup and while running the scripts in the lobster-challenge repo. Other environments may or may not experience the same issues.</p>
      <strong><em>During cardano node setup:</em></strong>
      <ul>
        <li>
          <p><strong>cardano-cli not found (running cardano-cli for the first time)</strong></p>
          <p><code>command not found: cardano-cli</code></p>
          <p>Fix: Use the <strong>$HOME</strong> env variable instead of <strong>~</strong> when adding <strong>.local/bin/</strong> to the path in <strong>.bashrc</strong> or <strong>.zshrc</strong>.</p>
          <pre>export PATH=&quot;$HOME/.local/bin/:$PATH&quot;</pre>
        </li>
        <li>
          <p><strong>socket not found (running `cardano-node run` for the first time)</strong></p>
          <p><code>{`Network.Socket.connect: <socket: 13>: does not exist (No such file or directory)`}</code></p>
          <p>Fix: Create a <strong>db</strong> folder and <strong>node.socket</strong> file (following the file convenstions in the <a href="https://developers.cardano.org/docs/get-started/running-cardano/" target="_blank" rel="noopener noreferrer">docs</a>).</p>
          <pre>
            {`# In the directory you intend to run the cardano node from.
mkdir db
touch db/node.socket`}
          </pre>
          <p>When you run <strong>`cardano-node run`</strong>, ensure that the values for <strong>database-path</strong> and <strong>socket-path</strong> are correct.</p>
        </li>
      </ul>
      <strong><em>While running scripts in the lobster-challenge repo:</em></strong>
      <ul>
        <li>
          <p><strong>cardano-cli not found</strong></p>
          <p><code>./cardano-cli: No such file or directory</code></p>
          <p>Fix: In all the <strong>.sh</strong> scripts, change <strong>./cardano-cli</strong> to <strong>cardano-cli</strong>, since this command should already be available in your <strong>$PATH</strong>, set in <strong>.bashrc</strong> or <strong>.zshrc</strong>.</p>
        </li>
        <li>
          <p><strong>socket not found</strong></p>
          <p><code>{`Network.Socket.connect: <socket: 13>: does not exist (No such file or directory)`}</code></p>
          <p>Fix: In all the <strong>.sh</strong> scripts, comment out setting the node socket path env variable, since this should already be set in <strong>.bashrc</strong> or <strong>.zshrc</strong>.</p>
          <p><code># export CARDANO_NODE_SOCKET_PATH=node.socket</code></p>
        </li>
      </ul>
    </Layout>
  );
}
