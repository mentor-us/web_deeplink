import React from 'react';
import { MemeModel } from '../model';
import styles from './styles.module.css';
import clsx from 'clsx';

interface Props{
    data: MemeModel;
}

export default function Meme({data}: Props) {
  return (
    <div className={clsx(styles.container)} style={{backgroundImage: `url(${data.url})`}}>
    </div>
  )
}

