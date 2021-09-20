import PropTypes from 'prop-types';

import DefaultHeader from 'components/DefaultHeader';
import Footer from 'components/Footer';

import styles from 'styles/Layout.module.scss';

const Layout = ({ date, children, header, title }) => (
  <div className={`container ${styles.layout}`}>
    <div className={styles.content}>
      {header}
      {title && <h1 className="mb-1">{title}</h1>}
      {date && <div className="mb-5"><small>{date}</small></div>}
      {children}
    </div>
    {/*<Footer />*/}
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
