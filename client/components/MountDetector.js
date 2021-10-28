import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function MountDetector({ onMount }) {
  useEffect(() => {
    onMount();
  }, []);

  return <div style={{ display: 'none' }}></div>;
}

MountDetector.defaultProps = {
  onMount: () => {},
}

MountDetector.propTypes = {
  onMount: PropTypes.func,
};
