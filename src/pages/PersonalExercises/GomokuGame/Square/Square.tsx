import React from 'react';
import { SquareModel } from '../models';
import styles from './Square.module.css';

interface Props {
  data: SquareModel;
}

export default function Square({data}:Props) {
  
  return (
    <button onClick={()=>{console.log("Hello")}} className={styles.button}></button>
  )
}
