import { EXERCISE_STATUS } from "../../utilities/constants";
import ExerciseCard from "./ExerciseCard";
import styles from "./Home.module.css";

export default function Home() {
  const exercises = [
    {
      name: "Bài tập cá nhân 1",
      toLink: "/web-nang-cao-19-3/btcn1",
      status: EXERCISE_STATUS.DONE,
      mark: 10,
    },
    {
      name: "Bài tập cá nhân 2",
      toLink: "/web-nang-cao-19-3/btcn2",
      status: EXERCISE_STATUS.DONE,
      mark: 10,
    },
    {
      name: "Bài tập cá nhân 3",
      toLink: "/web-nang-cao-19-3/btcn3",
      status: EXERCISE_STATUS.DONE,
      mark: 10,
    },
    {
      name: "Bài tập cá nhân 4",
      toLink: "/web-nang-cao-19-3/btcn4",
      status: EXERCISE_STATUS.DONE,
      mark: 9,
    },
    {
      name: "Bài tập cá nhân 5",
      toLink: "/web-nang-cao-19-3/btcn5",
      status: EXERCISE_STATUS.DONE,
      mark: 9,
    },
    {
      name: "Test Deeplink",
      toLink: "/web-nang-cao-19-3/test-deeplink",
      status: EXERCISE_STATUS.DONE,
      mark: 9,
    },
  ];
  return (
    <div className={styles.container}>
      <h1>19120484 - Tram Huu Duc</h1>

      <div className={styles.exerciseList}>
        {exercises.map((item) => {
          return <ExerciseCard data={item} />;
        })}
      </div>
    </div>
  );
}
