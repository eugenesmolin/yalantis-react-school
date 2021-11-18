import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { users } from "store/users";
import cn from "classnames";
import styles from "./index.module.scss";
import Loader from "../../../components/Loader";

function UsersPage() {
  const dispatch = useDispatch();
  const listByAlphabet = useSelector(users.selectors.listByAlphabet);
  const listStatus = useSelector(users.selectors.listStatus);

  useEffect(() => {
    dispatch(users.thunks.getUsers());
  }, []);

  console.log('=> listByAlphabet', listByAlphabet)

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Employees</h2>
        <div className={cn(styles.table, 'custom-scroll')}>
          {listStatus === 'success' ? (
            Object.entries(listByAlphabet).map(entry => (
              <div key={entry[0]}>
                <div className={styles.letter}>
                  {entry[0].toUpperCase()}
                </div>
                <div>
                  {entry[1].length > 0 ? (
                    entry[1].map(user => (
                      <div key={user.id}>
                        <div className={styles['user__name']}>
                          {user.firstName} {user.lastName}
                        </div>
                        <div className={styles['user__active']}>
                          <label>
                            <input type="radio" name={user.firstName} value={user.active}/>
                            Active
                          </label>
                          <label>
                            <input type="radio" name={user.firstName}/>
                            Not active
                          </label>
                        </div>
                      </div>
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
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>Employees birthday</h2>
        <div className={cn(styles.birthday, 'custom-scroll')}>
          Employees List is empty
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
