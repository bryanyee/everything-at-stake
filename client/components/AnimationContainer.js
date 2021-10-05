import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from 'styles/AnimationContainer.module.scss';

const AnimationContainer = forwardRef(({ children, className, style }, ref) => (
  <div
    className={`${className} ${styles['animation-container']}`}
    ref={ref}
    style={{ ...style }}
  >
    {children}
  </div>
));

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
