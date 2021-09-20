import Link from 'next/link';
import PropTypes from 'prop-types';

export default function IndexLink({ className, date, id, title }) {
  return (
    <div className={className}>
      <Link href={`/${id}`}>
        <a><h3 className="mb-1">{title}</h3></a>
      </Link>
      <small>{date}</small>
    </div>
  );
}

IndexLink.defaultProps = {
  className: '',
};

IndexLink.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
