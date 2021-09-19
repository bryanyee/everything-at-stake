import IndexLink from 'components/IndexLink'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <IndexLink
          href="/how-to-participate-in-the-lobster-challenge"
          title="How to participate in the lobster challenge"
        />
        <IndexLink
          href="/understanding-proof-of-work"
          title="Understanding proof of work"
        />
      </ul>
    </div>
  );
}
