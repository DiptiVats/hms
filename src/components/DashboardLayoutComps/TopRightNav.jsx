import classes from "./TopRightNav.module.css";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GrPowerShutdown } from "react-icons/gr";
export default function TopRightNav() {
  function handleLogout() {
    localStorage.removeItem("token");
  }
  return (
    <div className={classes.buttonWrapper}>
      <button className={classes.buttonIcon1}>
        <CiMail />
      </button>
      <button
        className={classes.buttonIcon2}
        onClick={handleLogout}
        style={{ float: "right" }}
      >
        <Link to="/" className={classes.logoutButton}>
          <GrPowerShutdown />
        </Link>
      </button>
    </div>
  );
}
