import cn from "classnames";
import styles from "./index.module.scss";

function SelectedEmployees() {
  return (
    <div className={cn(styles.birthday, 'custom-scroll')}>
      Employees List is empty
    </div>
  );
}

export default SelectedEmployees;