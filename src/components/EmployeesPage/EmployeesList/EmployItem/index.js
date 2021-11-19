import styles from "./index.module.scss";

function EmployItem(
  {
    firstName,
    lastName,
    isActive,
    onSelectActive = () => {}
  }
) {
  return (
    <div>
      <div className={styles['user__name']}>
        {firstName} {lastName}
      </div>
      <div className={styles['user__active']}>
        <label>
          <input type="radio" checked={!isActive} onChange={onSelectActive}/>
          Not active
        </label>
        <label>
          <input type="radio" checked={isActive} onChange={onSelectActive}/>
          Active
        </label>
      </div>
    </div>
  );
}

export default EmployItem;