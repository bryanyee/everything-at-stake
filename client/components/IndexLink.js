import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from 'styles/IndexLink.module.scss';

export default function IndexLink({ className, description, date, id, tags, title }) {
  return (
    <Link href={`/${id}`}>
      <a className={styles['index-link-anchor']}>
        <div className={`${className} ${styles['index-link-inner']} card`}>
          <div className="card-body p-4">
            <h3 className="mb-1">{title}</h3>
            <div className="mt-3 mb-5">{description}</div>
            <small>{date}</small>
          </div>
        </div>
      </a>
      {/*<div className={styles['tag-container']}>
        {tags.map((tag) => (
          <small className={styles.tag} key={tag}>{tag}</small>
        ))}
      </div>*/}
    </Link>
  );
}

IndexLink.defaultProps = {
  className: '',
  tags: [],
};

IndexLink.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};
