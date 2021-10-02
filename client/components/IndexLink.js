import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from 'styles/IndexLink.module.scss';
import tagStyles from 'styles/Tag.module.scss';

export default function IndexLink({ className, description, date, id, tags, title }) {
  return (
    <Link href={`/${id}`}>
      <a className={styles['index-link-anchor']}>
        <div className={`${className} ${styles['index-link-inner']} card`}>
          <div className="card-body p-4">
            <h3 className="mb-1">{title}</h3>
            <div className="mt-3 mb-5">{description}</div>
            <div className="d-flex justify-content-between">
              <small>{date}</small>
              <div>
                {tags.map((tag) => (
                  <small className={`ms-2 ${tagStyles.tag}`} key={tag}>{tag}</small>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
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
