import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from 'styles/IndexLink.module.scss';

export default function IndexLink({ className, date, id, tags, title }) {
  return (
    <div className={className}>
      <Link href={`/${id}`}>
        <a><h3 className="mb-1">{title}</h3></a>
      </Link>
      <div className="d-flex justify-content-between">
        <small className="mr-5">{date}</small>
{/*        <div className="d-flex">
          {tags.map((tag) => (
            <small className={styles.tag} key={tag}>{tag}</small>
          ))}
        </div>*/}
      </div>
    </div>
  );
}

IndexLink.defaultProps = {
  className: '',
  tags: [],
};

IndexLink.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};
