import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import Square from './Square/Square';
import styles from './GomokuGame.module.css';
import { Flag, HistoryModel, PointModel, SquareModel } from './models';
import Helper from './helper';

const WIN_MARK = 5;

export default function GomokuGame() {
  const [n, setN] = useState<number>(10);
  const [boards, setBoards] = useState<Array<Array<SquareModel>>>(Helper.initBoard(10, 10));
  const [histories, setHistories] = useState<HistoryModel[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Flag>(Flag.X);
  const [ascending, setAscending] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [isWon, setIsWon] = useState<boolean>(false);

  const onPressSquare = (x:  number, y: number, item: SquareModel)=>{
    const newMove = {flag: currentPlayer, keyOfWin: false};
    const newBoards = [...boards];
    newBoards[x][y] = newMove;
    setBoards(newBoards);
    setCurrentPlayer(currentPlayer === Flag.O ? Flag.X : Flag.O);
    const currentTime  = new Date();
    
    setHistories(prev => [{player: currentPlayer, point: {_x: x, _y: y}, time: currentTime.toTimeString().split(' ')[0]}, ...prev]);
    setCount(prev => prev + 1);
    
    const wins: Array<PointModel> = Helper.findWinSquares(boards, {_x: x, _y: y});
    
    if(wins.length >= 5){
      const newBoard: Array<Array<SquareModel>> = [...boards];
      wins.forEach((item)=>{
        newBoard[item._x][item._y] = {...newBoard[item._x][item._y], keyOfWin: true};
      })
      setBoards(newBoard)
      setIsWon(true);
      alert(`${Flag[currentPlayer]} won!`);
      return;
    }

    if(count === 25){
      alert("No one wins, This is a draw!")
      console.log("No one wins, This is a draw!");
    }
  }

  const renderSquare = (item: SquareModel, x: number, y: number)=>{
    return <Square data={item} onPress={()=>onPressSquare(x, y, item)} won={isWon}/>
  } 

  const handleSortingHistory = ()=> {
    setAscending(prev => !prev);
    setHistories(prev => prev.reverse());
  }

  const createNewGame = ()=>{
    setCount(0);
    setIsWon(false);
    setBoards(Helper.initBoard(n, n));
    setHistories([]);
  }

  return (
    <div>
      <div className={styles.container}>
        <input type="number" className={styles.button} value={n} onChange={e=>{setN(+e.target.value > 9 ? +e.target.value : 10)}}/>
        <button className={styles.button} onClick={createNewGame}>New Game {"(please input more than 10!)"}</button>
      </div>
      <div className={styles.container}>
      {/* Boards */}
        <table>
          {
            boards.map((rowItem, x)=>{
              return(<tr>{rowItem.map((colItem, y)=>(<th>{renderSquare(colItem, x, y)}</th>))}</tr>)
            })
          }
        </table>

        <div className={styles.historyContainer}>
            <div className={styles.historyHeader}>
              <h3>History</h3>
              <button onClick={handleSortingHistory} className={styles.button}>{ascending ? "Descending" : "Ascending"}</button>
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
    </div>
  )
}
