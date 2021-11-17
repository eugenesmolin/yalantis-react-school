import styles from "./index.module.scss";

function MainLayout({ children }) {
  return (
    <div className={styles.app}>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
