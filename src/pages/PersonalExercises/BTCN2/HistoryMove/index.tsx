import { Flag, HistoryModel } from '../models';
import styles from './styles.module.css';
import clsx from 'clsx';

interface Props {
    ascending: boolean,
    histories: HistoryModel[], 
    isWon: boolean, 
    handleSortingHistory: ()=>void,
    jumpToHistory: (item: HistoryModel)=>void
}

const HistoryBoard = ({handleSortingHistory, ascending, histories, isWon, jumpToHistory}:Props) => {
  return (
    <div className={styles.historyContainer}>
        <div className={styles.historyHeader}>
        <h3>History</h3>
        <button onClick={handleSortingHistory} className={styles.button}>{ascending ? "Descending" : "Ascending"}</button>
        </div>
        <div className={styles.historyList}>
        {histories.map((item: HistoryModel, index: number) => {
            return(
                <button disabled={isWon} onClick={()=>jumpToHistory(item)} className={clsx(styles.historyItem, {[styles.currentMove]: (!ascending && index === 0) || (ascending && index === histories.length - 1)})}>
                {`${Flag[item.player]}:   (${item.point._x}, ${item.point._y}) at ${item.time}`}
                </button>
            )
            })
        }
        </div>
    </div>
  )
}

export default HistoryBoard;