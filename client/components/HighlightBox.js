import PropTypes from 'prop-types';

import styles from 'styles/HighlightBox.module.scss';

export default function HighlightBox({ className, children }) {
  return (
    <div className={`${className} ${styles['highlight-box']}`}>
      {children}
    </div>
  );
}

HighlightBox.defaultProps = {
  className: '',
  children: null,
};

HighlightBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
