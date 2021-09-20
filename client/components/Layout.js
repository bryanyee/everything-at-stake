import PropTypes from 'prop-types';

import DefaultHeader from 'components/DefaultHeader';

import styles from 'styles/Layout.module.scss';

const Layout = ({ date, children, header, title }) => (
  <div>
    <div className={`container ${styles.layout}`}>
      {header}
      {title && <h1 className="mb-1">{title}</h1>}
      {date && <div className="mb-5"><small>{date}</small></div>}
      {children}
    </div>
  </div>
);

Layout.defaultProps = {
  children: null,
  date: null,
  header: <DefaultHeader />,
  title: null,
};

Layout.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string,
  header: PropTypes.node,
  title: PropTypes.string,
};

export default Layout;
