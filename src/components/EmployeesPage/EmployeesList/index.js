import EmployeeItem from "./EmployeeItem";
import Loader from "components/Loader";
import { useMemo } from "react";
import { ALPHABET } from "utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { employees } from "store/employees";
import cn from "classnames";
import styles from "./index.module.scss";

function EmployeesList() {
  const dispatch = useDispatch();
  const listEmployees = useSelector(employees.selectors.list);
  const listStatus = useSelector(employees.selectors.listStatus);

  const listByAlphabet = useMemo(() => {
    const newAlphabet = ALPHABET.reduce((a, v) => ({ ...a, [v]: [] }), {});

    listEmployees.forEach(employee => {
      const letter = employee.firstName.charAt(0).toLowerCase();
      newAlphabet[letter].push(employee);
    })

    return newAlphabet;
  }, [listEmployees]);

  const onSelectActive = ({ id, value }) => {
    if (value) dispatch(employees.actions.SELECT_EMPLOYEE(id));
    else dispatch(employees.actions.UNSELECT_EMPLOYEE(id));
  };

  if (['idle', 'pending'].includes(listStatus)) {
    return <Loader/>
  }

  return (
    <div className={cn(styles.cards, 'custom-scroll')}>
      {Object.entries(listByAlphabet).map(entry => (
        <div key={entry[0]}>
          <div className={styles.title}>
            {entry[0].toUpperCase()}
          </div>
          <div>
            {entry[1].length > 0 ? (
              entry[1].map(user => (
                <EmployeeItem
                  key={user.id}
                  {...user}
                  onSelectActive={(value) => onSelectActive({ id: user.id, value })}
                />
              ))
            ) : (
              <div>No Employees</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeesList;