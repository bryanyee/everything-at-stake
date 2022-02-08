const TAGS = Object.freeze({
  architecture: 'Architecture',
  // consensusProtocols: 'Consensus Protocols',
  developerHowTo: 'Developer How-To',
  journal: 'Journal',
  // visualizations: 'Visualizations',
});

const TAG_KEYS = Object.keys(TAGS);

// https://unicode.org/emoji/charts/full-emoji-list.html
const UNICODE_VALUES = Object.freeze({
  automobile: 'U+1F697',   // 🚗
  flexedBiceps: 'U+1F4AA', // 💪
  lobster: 'U+1F99E',      // 🦞
  locomotive: 'U+1F682',   // 🚂
  mountain: 'U+26F0',      // ⛰️
});

export {
  TAGS,
  TAG_KEYS,
  UNICODE_VALUES,
};
