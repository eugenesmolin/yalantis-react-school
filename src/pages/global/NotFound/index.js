import styles from "./index.module.scss";

function NotFoundPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.text}>
        <div className={styles['text__num']}>404</div>
        <div>Page not found</div>
      </div>
    </div>
  );
}

export default NotFoundPage;
