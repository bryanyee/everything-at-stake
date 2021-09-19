import Link from 'next/link'
import PropTypes from 'prop-types';

export default function IndexLink({ href, title }) {
  return (
    <li>
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

IndexLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
