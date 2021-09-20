import Link from 'next/link';

import styles from 'styles/Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles['footer-links']}>
        <a className={styles['footer-item']} href="https://twitter.com/StakeTheWorld" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
}
