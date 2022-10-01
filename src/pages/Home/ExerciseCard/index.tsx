import { Link } from 'react-router-dom';
import { ExerciseCardModel } from '../models';
import styles from './styles.module.css';

interface Props {
    data: ExerciseCardModel
}

export default function ExerciseCard({data} :Props) {
  return (
    <Link to={data.toLink} className={styles.link}>
        <h2>{data.name}</h2>
        <p className={styles.detail}>{`Trạng thái: ${data.status}`}</p>
        <p className={styles.detail}>{`Điểm tự chấm: ${data.mark}`}</p>
        <p className={styles.detail}>Click để xem chi tiết!</p>
    </Link>
  )
}
