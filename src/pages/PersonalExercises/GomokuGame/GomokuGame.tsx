import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Square from './Square/Square';
import styles from './GomokuGame.module.css';
import { Flag, HistoryModel, PointModel, SquareModel } from './models';
import Helper from './helper';

const WIN_MARK = 5;

export default function GomokuGame() {
  const [boards, setBoards] = useState<Array<Array<SquareModel>>>(Helper.initBoard(10, 10));
  const [histories, setHistories] = useState<HistoryModel[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Flag>(Flag.X);
  const [ascending, setAscending] = useState<boolean>(false);

  const onPressSquare = (x:  number, y: number, item: SquareModel)=>{
    const newMove = {flag: currentPlayer}
    const newBoards = [...boards];
    newBoards[x][y] = newMove;
    setBoards(newBoards);
    setCurrentPlayer(currentPlayer === Flag.O ? Flag.X : Flag.O);
    const currentTime  = new Date();
    console.log(currentTime.toTimeString().split(' ')[0]);
    
    setHistories(prev => [{player: currentPlayer, point: {_x: x, _y: y}, time: currentTime.toTimeString().split(' ')[0]}, ...prev])
  }

  const renderSquare = (item: SquareModel, x: number, y: number)=>{
    return <Square data={item} onPress={()=>onPressSquare(x, y, item)}/>
  } 

  const handleSortingHistory = ()=> {
    setAscending(prev => !prev);
    setHistories(prev => prev.reverse());
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
        <div className={styles.historyContainer}>
            <div className={styles.historyHeader}>
              <h4>History</h4> 
              <button onClick={handleSortingHistory} className={styles.buttonSorting}>{ascending ? "Descending" : "Ascending"}</button>
            </div>
            <div className={styles.historyList}>
              {histories.map((item, index) => {
                  
                  return(
                    <p className={clsx(styles.historyItem, {[styles.currentMove]: (!ascending && index === 0) || (ascending && index === histories.length - 1)})}>
                      {`${Flag[item.player]}:   (${item.point._x}, ${item.point._y}) at ${item.time}`}
                    </p>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}
