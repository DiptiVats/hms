import { Link } from "react-router-dom";
import classes from "./SearchForm.module.css";
import { FiSearch } from "react-icons/fi";
import { IoMdPersonAdd } from "react-icons/io";
export default function AddPatientForm({ text }) {
  return (
    <div className={classes.formWrapper}>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>Patients</div>
        <div style={{ flexGrow: 2 }}></div>
        <div>
          <Link to="add-patient">
            <button className={classes.roundedButton}>
              <IoMdPersonAdd />
              &nbsp; New Patient
            </button>
          </Link>
        </div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp; Patient
        Dashboard
      </div>
      <form className={classes.formSection}>
        <div className={classes.patientEntry}>
          <input
            name="patId"
            type="text"
            placeholder={text}
            className={classes.inputField}
            required
          />
        </div>
        <div>
          <button className={classes.searchButton}>
            Search &nbsp;
            <FiSearch />
          </button>
        </div>
        <div>
          <Link to="/dashboard">
            <button type="button" className={classes.resetButton}>
              Reset All
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
