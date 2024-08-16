import { Link } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import classes from "./OPD_Header.module.css";
export default function OPD_Header() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_child}>
        <div className={classes.wrapper_child_1}>
          <p>OPD</p>
          <div>
            <Link>Shree Krinshna Hosptital</Link>&nbsp; / OPD
          </div>
        </div>
        <div className={classes.wrapper_child_2}>
          <div>
            <p>Ravi Yadav | 32 Yrs | Male</p>
            <div>
              Previous Notes
              <BsExclamationCircle style={{ color: "#007bff" }} />
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------- inputs ------------------------ */}
      <div className={classes.wrapper_child}>
        <div className={classes.wrapper_child_input}>
          <p>OPD No.</p>
          <div>
            <input
              type="text"
              className={classes.diffInp}
              placeholder="Enter OPD no."
            />
          </div>
        </div>
        <div className={classes.wrapper_child_input}>
          <p>Attendance</p>
          <div>
            <input
              type="text"
              value="20-Jan-2020"
              className={classes.sameInp}
            />
          </div>
        </div>
        <div className={classes.wrapper_child_input}>
          <p>Last Visit Date</p>
          <div>
            <input
              type="text"
              value="20-Jan-2020"
              className={classes.sameInp}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
