import PropTypes from 'prop-types';

import styles from 'styles/TxRectangle.module.scss';

export default function TxRectangle({ className, style }) {
  return (
    <div
      className={`${className} ${styles['tx-rectangle']}`}
      style={{ ...style }}
    />
  );
}

TxRectangle.defaultProps = {
  className: '',
  style: {},
};

TxRectangle.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
