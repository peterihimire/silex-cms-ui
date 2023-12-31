import React, { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";
import { getDashboard } from "../../../../redux/features/users/userSlice";

import styles from "./styles.module.scss";

const Counts: React.FC = () => {
  const dispatch = useAppDispatch();
  const dash_id = "6de26966-0f0b-41f0-8fdb-79772aff1133";
  useEffect(() => {
    dispatch(getDashboard(dash_id));
  }, [dispatch]);

  const { authenticated, data, dashboard } = useAppSelector((state) => state);
  console.log(
    "This is data and authenticated!",
    data,
    authenticated,
    dashboard
  );

  return (
    <section className={`${styles.content}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.textContent}`}>
          <div className={`${styles.flipboxDiv}`}>
            <div className={`${styles.flipbox}`}>
              <h4>1</h4>
              <p>Total Flipboxes</p>
            </div>
            <div className={`${styles.flipbox}`}>
              <h4>12</h4>
              <p>Total Menus</p>
            </div>
            <div className={`${styles.flipbox}`}>
              <h4>13</h4>
              <p>Total Sliders</p>
            </div>
            <div className={`${styles.flipbox}`}>
              <h4>4</h4>
              <p>Total Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
