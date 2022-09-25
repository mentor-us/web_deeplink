import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link to={'/web-nang-cao-19-3/gomoku-game'} className={styles.link}>GomokuGame</Link>
    </div>
  )
}
