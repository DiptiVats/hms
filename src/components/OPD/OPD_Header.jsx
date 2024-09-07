import { Link } from "react-router-dom";
import classes from "./OPD_Header.module.css";
export default function OPD_Header({ patData1 }) {
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
            <p>
              {patData1.name}
              &nbsp;|&nbsp;
              {patData1.age}
              &nbsp;Yrs | &nbsp;
              {patData1.gender === "m" || patData1.gender === "M"
                ? "Male"
                : "Female"}
            </p>
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
            <input type="text" className={classes.sameInp} value={new Date()} />
          </div>
        </div>
        <div className={classes.wrapper_child_input}>
          <p>Last Visit Date</p>
          <div>
            <input type="date" className={classes.sameInp} />
          </div>
        </div>
      </div>
    </div>
  );
}
