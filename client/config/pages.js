import { TAGS } from 'config/constants';

const PAGES = [
  {
    date: 'September 20, 2021',
    enabled: true,
    id: 'how-to-participate-in-the-lobster-challenge',
    title: 'How to participate in the lobster challenge',
    tags: [TAGS.developerHowTos],
  },
  {
    date: 'TBD',
    enabled: true,
    id: 'understanding-proof-of-work',
    title: "Understanding proof of work",
    tags: [TAGS.consensusProtocols, TAGS.visualizations]
  },
];

const findPage = id => PAGES.find(page => id === page.id);

export { findPage, PAGES };
