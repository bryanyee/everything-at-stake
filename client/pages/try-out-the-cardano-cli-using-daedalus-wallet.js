import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';

import { findPage } from 'config/pages';

const page = findPage('try-out-the-cardano-cli-using-daedalus-wallet');

export default function TryOutTheCardanoCliUsingDaedalusWallet() {
  return (
    <Layout date={page.date} title={page.title}>
      <p>If you‘re looking for an easy place to get started interacting with the Cardano blockchain without doing a full Cardano node setup, you can use a Daedalus wallet installation to run cardano-cli commands!</p>
      <p>As a full node wallet, Daedalus downloads a full copy of the Cardano blockchain and runs a Cardano node, which cli commands can be run against.</p>
      <h3 className="mt-5">Install cardano-cli</h3>
      <p>First, download the cardano-cli binaries, available at:</p>
      <ul>
        <li><a href="https://hydra.iohk.io/job/Cardano/cardano-node/cardano-node-linux/latest-finished" target="_blank" rel="noopener noreferrer">Linux</a></li>
        <li><a href="https://hydra.iohk.io/job/Cardano/cardano-node/cardano-node-win64/latest-finished" target="_blank" rel="noopener noreferrer">Win64</a></li>
        <li><a href="https://hydra.iohk.io/job/Cardano/cardano-node/cardano-node-macos/latest-finished" target="_blank" rel="noopener noreferrer">Macos</a></li>
      </ul>
      <p>The download includes an executable file for `<strong>cardano-cli</strong>`. Move the file to `<strong>/usr/local/bin</strong>`.</p>
      <p>In a Terminal window, try running the cli:</p>
      <pre>cardano-cli --version</pre>
      <h3 className="mt-5">Target the cardano node running for Daedalus</h3>
      <p>Open the Daedalus wallet application and wait for it to sync.</p>
      <p>In a Terminal window, enter the following:</p>
      <pre>
        {`export CARDANO_NODE_SOCKET_PATH=$(ps ax | grep -v grep | grep cardano-wallet | grep mainnet | sed -E 's/(.*)node-socket //')
`}
      </pre>
      <p>This enables <strong>`cardano-cli`</strong> to run against the Cardano node running for Daedalus. Check the path with:</p>
      <pre>
        {`echo $CARDANO_NODE_SOCKET_PATH`}
      </pre>
      <h3 className="mt-5">Try cli commands</h3>
      <p>With the Daedalus wallet running, try making some queries!</p>
      <p>1. Get information about the latest block.</p>
      <pre>cardano-cli query tip --mainnet</pre>
      <p>Querying the tip outputs:</p>
      <pre>
        {`{
    "epoch": 292,
    "hash": "2e251079f51b68c1ea5f706e43352b1ef1a50ec628d414bf7c6df7c9bacb3c1d",
    "slot": 41136044,
    "block": 6295994,
    "era": "Alonzo",
    "syncProgress": "97.86"
}
`}
      </pre>
      <p className="mt-5">2. View utxos controlled by an address. This example is from the <ExternalLink href="https://github.com/input-output-hk/lobster-challenge">lobster challenge</ExternalLink>.</p>
      <pre>
        {`cardano-cli query utxo \
--mainnet \
--address addr1w8433zk2shufk42hn4x7zznjjuqwwyfmxffcjszw5l2ulesdt3jff
`}
      </pre>
      <p>The output shows the utxos that are currently at the address. The output for the above example address is from 28 October 2021 (scroll horizontally to view the amounts).</p>
      <pre>
        {`                           TxHash                                 TxIx        Amount
--------------------------------------------------------------------------------------
319752b414804415988fb1165358e69f46095a9e9b1c01ef0830c182dc57f78b     0        1000000 lovelace + TxOutDatumHashNone
4c34feb07e32aa4855a494306aefcf16743356811914d680e112a6ec12214455     0        1000000 lovelace + TxOutDatumHashNone
63091c70aa6f8b402faffd24909d93c7721cbdced7094b62e52d157da8fb44e4     0        5000000 lovelace + TxOutDatumHashNone
67d318fabdd9905033bfe6156c6595716c952d496cabb9d98773c948974780ec     0        1000000 lovelace + TxOutDatumHashNone
cb7b44500fc9145cf5b13a533bc7616eb219b7a080bc49d7ce6204c06b351733     0        1000000 lovelace + TxOutDatumHashNone
cf944108d7130a8d53925ff9903a254d5133d5978b7e69e04c67d5b8776a6fb2     1        2034438 lovelace + 1 cc7888851f0f5aa64c136e0c8fb251e9702f3f6c9efcf3a60a54f419.LobsterNFT + 522 fda1b6b487bee2e7f64ecf24d24b1224342484c0195ee1b7b943db50.LobsterCounter + 501 fda1b6b487bee2e7f64ecf24d24b1224342484c0195ee1b7b943db50.LobsterVotes + TxOutDatumHash ScriptDataInAlonzoEra "45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0"
db250ed5eb4454843af19dea7ca84a8adda170fc88284e7e5e2381b41dab5f9b     1        30768137 lovelace + TxOutDatumHashNone
`}
      </pre>
      <p className="mt-5">3. View the current protocol parameters, used to configure settings for the Cardano node.</p>
      <pre>cardano-cli query protocol-parameters --mainnet</pre>
      <p>The output is very lengthy. A couple interesting things to look at is the current value for the <strong>`maxBlockBodySize`</strong>, currently set to <strong>65536</strong>, and the <strong>`maxTxSize`</strong>, currently set to <strong>16384</strong>.</p>
      <p>This tells us that the current max block size is <strong>~65KB</strong>, and the current max transaction size (including smart contracts) is <strong>~16KB</strong>.</p>
      <p className="mt-5">4. Get the current delegations and reward accounts filtered by stake address (note that the stake address is separate from the payment address used to receive tokens).</p>
      <pre>
        {`cardano-cli query stake-address-info --mainnet --address stake1u9qzdz8cwdzequ56g0s2ac776rur2syw775annpf2ne0efgacqy09       
`}
      </pre>
      <p>The output shows reward amounts for the stake address and an identifier for the stake pool delegation.</p>
      <pre>
        {`[
    {
        "address": "stake1u9qzdz8cwdzequ56g0s2ac776rur2syw775annpf2ne0efgacqy09",
        "rewardAccountBalance": 7618690,
        "delegation": "pool120563wl92yssz66evk4u9lxm7zh6gk2wws0zfe8ep4e0gc77ypt"
    }
]
`}
      </pre>
      <h3 className="mt-5">References</h3>
      <p>Thanks to the GitHub user <strong>ilyar</strong> for providing the <ExternalLink href="https://gist.github.com/ilyar/09eda2bb01545296aa9e1351b8218086">snippet</ExternalLink> containing the export statement for running cardano-cli against the Daedalus Cardano node.</p>
      <p>If you‘d like to get more hands on, check out the <ExternalLink href="https://developers.cardano.org/docs/get-started/installing-cardano-node">developer docs</ExternalLink> for installing and running Cardano node!</p>
    </Layout>
  );
}
