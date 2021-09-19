import Link from 'next/link'

import CardanoNode from 'components/CardanoNode';
import styles from '../styles/Home.module.css';

export default function UnderstandingProofOfWork() {
  return (
    <div className={styles.container}>
      <div>Understanding proof of work</div>
      <CardanoNode />
    </div>
  );
}
