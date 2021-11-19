import { useSelector } from "react-redux";
import { employees } from "store/employees";
import { useMemo } from "react";
import SelectedItem from "./SelectedItem";
import { MONTHS } from "utils/constants";
import cn from "classnames";
import styles from "./index.module.scss";

function SelectedEmployees() {
  const sortedSelectedEmployees = useSelector(employees.selectors.sortedSelectedEmployees);

  const employeesAreActive = useMemo(() => {
    const activeList = sortedSelectedEmployees.filter(employee => employee.isActive);

    const newMonths = MONTHS.reduce((a, v) => ({ ...a, [v]: [] }), {});

    console.log(newMonths)

    // listEmployees.forEach(employee => {
    //   const letter = employee.firstName.charAt(0).toLowerCase();
    //   newAlphabet[letter].push(employee);
    // })
    
    return activeList;
  }, [sortedSelectedEmployees]);

  console.log(employeesAreActive)

  return (
    <div className={cn(styles.birthday, 'custom-scroll')}>
      {employeesAreActive.length > 0 ? (
        employeesAreActive.map(employee => (
          <SelectedItem key={employee.id} {...employee}/>
        ))
      ) : (
        'Employees List is empty'
      )}
    </div>
  );
}

export default SelectedEmployees;