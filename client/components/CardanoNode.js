import { useState, useEffect, useRef } from 'react';
import faker from 'faker';
import shajs from 'sha.js';

import styles from 'styles/CardanoNode.module.scss';

function getRandomString() {
  return faker.lorem.words();
}

function getSha(string) {
  return shajs('sha256').update(string).digest('hex');
}

export default function CardanoNode() {
  const [string, setString] = useState('');
  const [result, setResult] = useState('');
  let intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setString(getRandomString());
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    }
  }, []);

  return (
    <div className={styles['node-wrapper']}>
      <div className={styles['cardano-node']} />
      <div className={styles['string-input']}>{string}</div>
    </div>
  );
}
