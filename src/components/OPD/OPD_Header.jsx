import { Link } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import classes from "./OPD_Header.module.css";
export default function OPD_Header({ patData }) {
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
              {patData.length === undefined
                ? patData.opdPatFname
                : patData[0].opdPatFname}
              &nbsp;|&nbsp;
              {patData.length === undefined
                ? patData.opdAge
                : patData[0].opdAge}
              &nbsp;Yrs | &nbsp;
              {patData.length === undefined
                ? patData.opdSex === "m" || patData.opdSex === "M"
                : patData[0].opdSex === "m" || patData[0].opdSex == "M"
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
            <input type="date" className={classes.sameInp} />
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
