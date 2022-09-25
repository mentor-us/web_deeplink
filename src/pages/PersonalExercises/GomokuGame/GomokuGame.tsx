import React, { useEffect, useMemo, useState } from 'react';
import Square from './Square/Square';
import styles from './GomokuGame.module.css';
import { Flag, SquareModel } from './models';
import Helper from './helper';

const WIN_MARK = 5;

export default function GomokuGame() {
  const [boards, setBoards] = useState<Array<Array<SquareModel>>>(Helper.initBoard(10, 10));

  const [currentPlayer, setCurrentPlayer] = useState<Flag>(Flag.X);

  const onPressSquare = (x:  number, y: number, item: SquareModel)=>{
    const newMove = {flag: currentPlayer}
    const newBoards = [...boards];
    newBoards[x][y] = newMove;
    setBoards(newBoards);
    setCurrentPlayer(currentPlayer === Flag.O ? Flag.X : Flag.O);
  }

  const renderSquare = (item: SquareModel, x: number, y: number)=>{
    return <Square data={item} onPress={()=>onPressSquare(x, y, item)}/>
  } 

  console.log("@DUKE_Reload");
  
  return (
    <div className={styles.container}>
        <table>
          {
            boards.map((rowItem, x)=>{
              return(<tr>{rowItem.map((colItem, y)=>(<th>{renderSquare(colItem, x, y)}</th>))}</tr>)
            })
          }
        </table>
    </div>
  )
}
