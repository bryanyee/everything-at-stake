import Layout from 'components/Layout';
import HighlightBox from 'components/HighlightBox';

import { findPage } from 'config/pages';

const page = findPage('how-to-participate-in-the-lobster-challenge');

export default function HowToParticipateInTheLobsterChallenge() {
  return (
    <Layout date={page.date} title={page.title} className="mb-5">
      <HighlightBox className="mb-3">
        <strong>Note:</strong> The target audience for this article are those who have already set up a Cardano node. I‘ve listed below the few CLI commands needed to vote, along with several fixes I made while following the original instructions.
      </HighlightBox>
      <p>On September 12, 2021, the Alonzo hard fork of the Cardano blockchain successfully brought smart contract functionality to the mainnet.</p>
      <p>One of the first smart contracts deployed was the Lobster Challenge, a program for the community to vote on naming Charles Hoskinson‘s beloved lobster.</p>
      <p>Lars Brünjes, IOHK‘s lead instructor and creator of the smart contract, wrote up a couple resources to participate:</p>
      <p>
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
      </p>
      <p>At the time of writing this post, we‘ve still got 177 votes to go until we reach the required 500 votes!</p>
      <p>It‘s my goal to help make voting as easy as possible, so that the lobster can be named in time for Cardano Summit on September 25. This article will serve as a quick notes version for the voting instructions. Let‘s get this lobster a name!</p>
      <h3 className="mt-5">Prerequisites</h3>
      <p>There currently isn‘t a dApp user interface for the voting. Instead, you‘ll need to be able to run a cardano node and run the cardano CLI.</p>
      <p>If you haven‘t already set up a Cardano node, please know that participating in the lobster vote <strong>requires technical knowledge. Additionally, it takes several hours to set up a node for the first time and sync the blockchain</strong>. Please make sure your machine meets the minimum requirements to run a Cardano node.</p>
      <p>
        <ol>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://developers.cardano.org/docs/get-started/installing-cardano-node">
              Install cardano-node (Developer docs)
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://developers.cardano.org/docs/get-started/running-cardano/">
              Run cardano-node (Developer docs)
            </a>
          </li>
        </ol>
      </p>
      <h3 className="mt-5">Steps to vote</h3>
      <p></p>
    </Layout>
  );
}
