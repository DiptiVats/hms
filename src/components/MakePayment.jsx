import classes from "./MakePayment.module.css";
import { Link } from "react-router-dom";
export default function MakePayment() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_child}>
        <div className={classes.wrapper_child_1}>
          <p>Payment</p>
          <div>
            <Link>Shree Krinshna Hosptital</Link>&nbsp; / Payment
          </div>
        </div>
      </div>
      <div>
        <div className={classes.firstInputSection}>
          <div style={{ width: "45%" }}>
            <input />
          </div>
          <div style={{ width: "23%" }}>
            <input />
          </div>
          <div style={{ width: "23%" }}>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
}
