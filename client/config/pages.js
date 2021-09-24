import { TAGS } from 'config/constants';

const PAGES = [
  {
    date: '20 September 2021',
    enabled: true,
    id: 'participate-in-the-lobster-challenge-in-under-10-minutes',
    title: 'Participate in the lobster challenge in under 10 minutes',
    tags: [TAGS.developerHowTo],
  },
  {
    date: '23 September 2021',
    enabled: true,
    id: 'the-cardano-bull-case-fall-2021',
    title: "The Cardano Bull Case (Fall 2021)",
    tags: [TAGS.investing]
  },
  {
    date: 'Coming Soon',
    enabled: false,
    id: 'understanding-proof-of-work',
    title: "(Preview) Understanding proof of work",
    tags: [TAGS.consensusProtocols, TAGS.visualizations]
  },
];

const findPage = id => PAGES.find(page => id === page.id);

export { findPage, PAGES };
