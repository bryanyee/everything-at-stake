import PropTypes from 'prop-types';

export default function ExternalLink({ children, href }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
}

ExternalLink.defaultProps = {
  children: null,
};

ExternalLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};
