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
    date: '28 October 2021',
    description: 'Cardano has zero live applications. Yet, what sets it apart from all other distributed ledger protocols?',
    enabled: true,
    id: 'why-cardano',
    title: "Why Cardano?",
    tags: [TAGS.journal],
  },
  {
    date: '29 October 2021',
    description: 'Learn how to run basic cardano-cli commands using the Daedalus Cardano node.',
    enabled: true,
    id: 'try-out-the-cardano-cli-using-daedalus-wallet',
    title: "Try out the cardano-cli using daedalus wallet",
    tags: [TAGS.developerHowTo],
  },
  {
    date: '7 February 2022',
    description: 'Earn rewards and secure the network, while maintaining custody and control of your Ada.',
    enabled: false,
    id: 'delegated-staking-on-cardano',
    title: "Delegated staking on Cardano is un-matched",
    tags: [TAGS.architecture],
  },
  {
    date: 'Coming Soon',
    description: 'An animated visual guide to scaling transactions on Hydra head chains.',
    enabled: false,
    id: 'understanding-cardanos-hydra-scaling-solution-with-visualizations',
    title: "Understanding Cardano‘s Hydra scaling solution with visualizations",
    tags: [],
    // tags: [TAGS.architecture, TAGS.visualizations],
  },
  {
    date: 'Coming Soon',
    description: 'A visual guide to the proof of work consensus mechanism.',
    enabled: false,
    id: 'understanding-proof-of-work',
    title: "(Preview) Understanding proof of work",
    tags: [],
    // tags: [TAGS.architecture, TAGS.visualizations],
  },
];

const findPage = id => PAGES.find(page => id === page.id);

export { findPage, PAGES };
