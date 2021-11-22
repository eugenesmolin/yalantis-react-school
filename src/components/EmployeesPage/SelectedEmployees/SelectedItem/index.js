import styles from "./index.module.scss";

function SelectedItem(
  {
    firstName,
    lastName,
    birthday,
  }
) {
  return (
    <div className={styles.employee}>
      <strong>{lastName} {firstName} - {birthday}</strong>
    </div>
  );
}

export default SelectedItem;