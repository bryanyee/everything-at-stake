import { TAGS } from 'config/constants';

const PAGES = [
  {
    date: '20 September 2021',
    description: 'Help name Charles Hoskinson‘s lobster using the cardano-cli.',
    enabled: true,
    id: 'participate-in-the-lobster-challenge-in-under-10-minutes',
    title: 'Participate in the lobster challenge in under 10 minutes',
    tags: [TAGS.developerHowTo],
  },
  {
    date: '24 September 2021',
    description: 'The world‘s first true 3rd generation blockchain is ready for prime time.',
    enabled: true,
    id: 'cardano-summit-the-beginning-of-a-new-era',
    title: "Cardano Summit: the beginning of a new era",
    tags: [TAGS.journal],
  },
  {
    date: '30 September 2021',
    description: 'Take advantage of Daedalus to query the Cardano blockchain.',
    enabled: true,
    id: 'how-to-run-cardano-cli-against-daedalus-wallet',
    title: "How to run cardano-cli against a daedalus wallet",
    tags: [TAGS.developerHowTo],
  },
  {
    date: 'Coming Soon',
    description: 'A visual guide to the proof of work consensus mechanism.',
    enabled: false,
    id: 'understanding-proof-of-work',
    title: "(Preview) Understanding proof of work",
    tags: [TAGS.consensusProtocols, TAGS.visualizations],
  },
];

const findPage = id => PAGES.find(page => id === page.id);

export { findPage, PAGES };
