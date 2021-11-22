import { useSelector } from "react-redux";
import { employees } from "store/employees";
import { useMemo } from "react";
import SelectedItem from "./SelectedItem";
import { MONTHS } from "utils/constants";
import cn from "classnames";
import styles from "./index.module.scss";

const monthsFromCurrent = [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function SelectedEmployees() {
  const sortedSelectedEmployees = useSelector(employees.selectors.sortedSelectedEmployees);

  const employeesAreActive = useMemo(() => {
    const selectedEmployees = sortedSelectedEmployees.filter(employee => employee.isActive);

    const employees = {};

    selectedEmployees.forEach(employee => {
      const month = new Date(employee.dob).getMonth();
      if (employees[month]?.length) employees[month].push(employee);
      else employees[month] = [employee];
    })

    return employees;
  }, [sortedSelectedEmployees]);

  return (
    <div className={cn(styles.birthday, 'custom-scroll')}>
      {Object.keys(employeesAreActive).length > 0 ? (
        monthsFromCurrent.map(month => (
          <div
            key={MONTHS[month]}
            className={styles.month}
          >
            <div className={styles.title}>{MONTHS[month]}</div>
            {employeesAreActive[month] ? employeesAreActive[month].map(employee => (
              <SelectedItem key={employee.id} {...employee}/>
            )) : (
              <div className={styles.employee}>No Employees</div>
            )}
          </div>
        ))
      ) : (
        'Employees List is empty'
      )}
    </div>
  );
}

export default SelectedEmployees;