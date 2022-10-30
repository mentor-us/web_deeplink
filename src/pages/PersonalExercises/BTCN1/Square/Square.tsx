import clsx from 'clsx';
import styles from './Square.module.css';
import { Flag, SquareModel } from '../models';
import { memo } from 'react';
import equals from 'react-fast-compare';

interface Props {
  data: SquareModel;
  won: boolean;
  onPress: ()=>void;
}

const Square = ({data, onPress, won}:Props) => {
  const renderIcon = (flag: any) => {
    switch(flag){
      case Flag.X:
        return <span className={styles.typeX}>X</span>;
      case Flag.O:
        return <span className={styles.typeO}>O</span>;
      default:
        return <></>;
    }
  }

  return (
    <button 
      disabled={data.flag !== null || won}
      onClick={onPress} 
      className={clsx(styles.button, {[styles.pressable]: data.flag === null && !won}, {[styles.winSquare]: data.keyOfWin})}>
        {renderIcon(data.flag)}
    </button>
  )
}

export default memo(Square, equals);
