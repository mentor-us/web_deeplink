import styles from "./styles.module.css";

interface Props {
  path: string;
}

export default function TestDeepLink({ path }: Props) {
  const onSubmit = () => {
    const intentLink = path.replace("https", "intent");
    const url = `${intentLink}#Intent;scheme=https;package=com.mentorus;end`;
    console.log("@DUKE: ", url);
    // document.location.replace("intent://my.vng.vn/me/support-center#Intent;scheme=https;package=com.myvng.eportal.app.mobile;end");

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
