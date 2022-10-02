import {useState} from 'react';
import styles from './GomokuGame.module.css';
import { Flag, HistoryModel, PointModel, SquareModel } from './models';
import Helper from './helper';
import isEqual from 'react-fast-compare';
import Boards from './Boards';
import HistoryBoard from './HistoryMove';

const WIN_MARK = 5;

export default function GomokuGame() {
  const [n, setN] = useState<number>(10);
  const [boards, setBoards] = useState<Array<Array<SquareModel>>>(Helper.initBoard(10, 10));
  const [histories, setHistories] = useState<HistoryModel[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Flag>(Flag.X);
  const [ascending, setAscending] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [isWon, setIsWon] = useState<boolean>(false);

  const onPressSquare = (x:  number, y: number)=>{
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

    if(count === n*n - 1){
      alert("No one wins, This is a draw!")
      console.log("No one wins, This is a draw!");
    }
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

  const jumpToHistory = (item:HistoryModel)=>{
    const index = histories.findIndex(element => isEqual(element, item));
    const newBoards = [...boards];
    if(ascending) {
      const temps = histories.slice(index + 1);
      temps.forEach((element)=>{
        newBoards[element.point._x][element.point._y] = {flag: null, keyOfWin: false};
      })
      setHistories(prev=>prev.slice(0, index + 1));
    }
    else {
      const temps = histories.slice(0, index);
      temps.forEach((element)=>{
        newBoards[element.point._x][element.point._y] = {flag: null, keyOfWin: false};
      })
      setHistories(prev=>prev.slice(index));
    }
    setBoards(newBoards)
  }

  return (
    <div>
      <div className={styles.container}>
        <input type="number" className={styles.input} value={n} onChange={e=>{setN(+e.target.value > 5 ? +e.target.value : 5)}}/>
        <button className={styles.button} onClick={createNewGame}>New Game {"(please input more than 5!)"}</button>
      </div>
      <div className={styles.container}>
        {/* Boards */}
        <Boards 
          boards={boards}
          onPressSquare={onPressSquare}
          isWon={isWon}
        />

        {/* Histories Move */}
        <HistoryBoard
          ascending={ascending}          
          isWon={isWon}
          histories={histories}
          jumpToHistory={jumpToHistory}
          handleSortingHistory={handleSortingHistory}
        />
      </div>
    </div>
  )
}
