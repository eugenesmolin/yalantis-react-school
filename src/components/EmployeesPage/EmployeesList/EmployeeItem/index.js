import cn from "classnames";
import styles from "./index.module.scss";

function EmployeeItem(
  {
    firstName,
    lastName,
    isActive,
    onSelectActive = () => {}
  }
) {
  return (
    <div>
      <div className={cn(
        styles['user__name'],
        { [styles['user__name--active']]: isActive }
      )}>
        {firstName} {lastName}
      </div>
      <div className={styles['user__active']}>
        <label>
          <input
            type="radio"
            checked={!isActive}
            onChange={() => onSelectActive(false)}
          />
          Not active
        </label>
        <label>
          <input
            type="radio"
            checked={isActive}
            onChange={() => onSelectActive(true)}
          />
          Active
        </label>
      </div>
    </div>
  );
}

export default EmployeeItem;