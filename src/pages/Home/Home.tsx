import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>19120484 - Tram Huu Duc</h1>
      
      <div className={styles.exerciseList}>
        <Link to={'/web-nang-cao-19-3/btcn1'} className={styles.link}>
          <h2>Bài tập cá nhân 1</h2>
          <p className={styles.detail}>Trạng thái: Đã làm xong!</p>
          <p className={styles.detail}>Điểm tự chấm: 100/100</p>
          <p className={styles.detail}>Click để xem chi tiết!</p>
        </Link>

        <Link to={'/web-nang-cao-19-3/btcn2'} className={styles.link}>
          <h2>Bài tập cá nhân 2</h2>
          <p className={styles.detail}>Trạng thái: Đã làm xong!</p>
          <p className={styles.detail}>Điểm tự chấm: 100/100</p>
          <p className={styles.detail}>Click để xem chi tiết!</p>
        </Link>
      </div>

    </div>
  )
}
