import Link from 'next/link';

import styles from 'styles/DefaultHeader.module.scss';

const DefaultHeader = () => (
  <Link href="/">
    <a className={styles.link}><h3>Everything At Stake</h3></a>
  </Link>
);

export default DefaultHeader;
