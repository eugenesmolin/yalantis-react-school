import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { employees } from "store/employees";
import EmployeesList from "components/EmployeesPage/EmployeesList";
import SelectedEmployees from "components/EmployeesPage/SelectedEmployees";
import styles from "./index.module.scss";

function EmployeesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employees.thunks.getEmployees());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Employees</h2>
        <EmployeesList/>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>Employees birthday</h2>
        <SelectedEmployees/>
      </div>
    </div>
  );
}

export default EmployeesPage;
