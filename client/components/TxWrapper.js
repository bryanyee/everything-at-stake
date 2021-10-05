import PropTypes from 'prop-types';

import styles from 'styles/TxWrapper.module.scss';

const TxWrapper = ({ children, className, style }) => (
  <div
    className={`${className} ${styles['tx-wrapper']}`}
    style={{ ...style }}
  >
    {children}
  </div>
);

TxWrapper.defaultProps = {
  children: null,
  className: '',
  style: {},
};

TxWrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default TxWrapper;
