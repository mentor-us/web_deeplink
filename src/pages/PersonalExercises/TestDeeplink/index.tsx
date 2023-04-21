import styles from "./styles.module.css";

export default function TestDeepLink() {
  const onSubmit = () => {
    console.log("@DUKE");
    // document.location.replace("https://www.w3schools.com");
    // document.location.replace(
    //   "intent://mentor.fit.hcmus.edu.vn/#Intent;scheme=https;end"
    // );
    // https://tramhuuducvn.github.io/web-nang-cao-19-3/
    document.location.replace(
      "intent://tramhuuducvn.github.io/web-nang-cao-19-3#Intent;scheme=https;end"
    );
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
