import clsx from 'clsx';
import styles from './Square.module.css';
import { Flag, SquareModel } from '../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { memo } from 'react';
import equals from 'react-fast-compare';

interface Props {
  data: SquareModel;
  onPress: ()=>void;
}

const Square = ({data, onPress}:Props) => {
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
  console.log("@DUKE_Reload Square");
  return (
    <button 
      disabled={data.flag !== null}
      onClick={onPress} 
      className={clsx(styles.button, {[styles.pressable]: data.flag === null})}>
        {renderIcon(data.flag)}
    </button>
  )
}

export default memo(Square, equals);
