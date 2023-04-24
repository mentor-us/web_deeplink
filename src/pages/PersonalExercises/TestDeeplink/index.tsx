import styles from "./styles.module.css";

interface Props {
  path: string;
}

export default function TestDeepLink({ path }: Props) {
  const onSubmit = () => {
    const intentLink = path.replace("http", "intent");
    const url = `${intentLink}#Intent;scheme=https;end`;
    console.log("@DUKE: ", url);
    // document.location.replace("https://www.w3schools.com");
    // document.location.replace(
    //   "intent://mentor.fit.hcmus.edu.vn/#Intent;scheme=https;end"
    // );
    // https://tramhuuducvn.github.io/web-nang-cao-19-3/
    document.location.replace(url);
  };

  return (
    <div className={styles.container}>
      <button onClick={onSubmit} type="submit" className={styles.buttonSubmit}>
        {/* Press to open app */}
        Nhấn để mở ứng dụng
      </button>
    </div>
  );
}
