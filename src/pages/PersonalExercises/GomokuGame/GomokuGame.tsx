import React, { useEffect, useMemo, useState } from 'react';
import Square from './Square/Square';
import styles from './GomokuGame.module.css';
import { SquareModel } from './models';

export default function GomokuGame() {
  // const rows: number = 10;
  // const columns: number = 10;
  const [boards, setBoards] = useState<Array<Array<SquareModel>>>(()=>{
    const rows: number = 10;
    const columns: number = 10;
    
    const result = new Array();
    for (let i = 0; i < rows; i++) {
      const col = new Array();
      for (let j = 0; j < columns; j++) {
        const element:SquareModel = {flag: null};
        col.push(element);
      }
      result.push(col);
    }

    return result;
  });

  const renderSquare = (item: SquareModel)=>{
    return <Square data={item}/>
  } 

  return (
    <div className={styles.container}>
        <table>
          {
            boards.map((rowItem)=>{
              return(<tr>{rowItem.map((colItem)=>renderSquare(colItem))}</tr>)
            })
          }
        </table>
    </div>
  )
}
