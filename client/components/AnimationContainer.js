import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import useMountState from 'hooks/useMountState';

import styles from 'styles/AnimationContainer.module.scss';

const AnimationContainer = forwardRef(({ children, className, style }, ref) => {
  const [isMounted] = useMountState();

  return (
    <div
      className={`${className} ${styles['animation-container']}`}
      ref={ref}
      style={{ ...style }}
    >
      {/* Render children after the parent element has mounted and its width is known */}
      {isMounted && children({ containerWidth: ref.current.offsetWidth })}
    </div>
  );
});

AnimationContainer.defaultProps = {
  children: null,
  className: '',
  style: {},
};

AnimationContainer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AnimationContainer;
