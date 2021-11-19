import EmployItem from "./EmployItem";
import Loader from "components/Loader";
import { useMemo } from "react";
import { alphabet } from "utils/constants";
import { useSelector } from "react-redux";
import { employees } from "store/employees";
import cn from "classnames";
import styles from "./index.module.scss";

function EmployeesList() {
  const listEmployees = useSelector(employees.selectors.list);
  const listStatus = useSelector(employees.selectors.listStatus);

  const listByAlphabet = useMemo(() => {
    const newAlphabet = alphabet.reduce((a, v) => ({ ...a, [v]: [] }), {});

    listEmployees.forEach(user => {
      const letter = user.firstName.charAt(0).toLowerCase();
      newAlphabet[letter].push(user);
    })

    return newAlphabet;
  }, [listEmployees]);

  console.log('=> listByAlphabet', listByAlphabet)

  return (
    <div className={cn(styles.cards, 'custom-scroll')}>
      {listStatus === 'success' ? (
        Object.entries(listByAlphabet).map(entry => (
          <div key={entry[0]}>
            <div className={styles.title}>
              {entry[0].toUpperCase()}
            </div>
            <div>
              {entry[1].length > 0 ? (
                entry[1].map(user => (
                  <EmployItem
                    key={user.id}
                    {...user}
                    onSelectActive={(e) => console.log('onSelect', e)}
                  />
                ))
              ) : (
                <div>No Employees</div>
              )}
            </div>
          </div>
        ))
      ) : (
        <Loader/>
      )}
    </div>
  );
}

export default EmployeesList;