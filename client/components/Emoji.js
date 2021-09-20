import { memo } from 'react';
import PropTypes from 'prop-types';

const Emoji = memo(({ unicode }) => {
  const hexNumber = unicode.replace(/U\+/, '0x'); // e.g. 0x1F99E
  const symbol = String.fromCodePoint(hexNumber); // e.g. 🦞
  return <span role="image" aria-hidden>{symbol}</span>;
});

Emoji.propTypes = {
  unicode: PropTypes.string.isRequired, // e.g. U+1F99E
};

export default Emoji;