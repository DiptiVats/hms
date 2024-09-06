import { Link } from "react-router-dom";
import classes from "./SearchForm.module.css";
export default function AddPatientForm({ text, patData }) {
  return (
    <div className={classes.formWrapper}>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>Patients</div>
        <div style={{ flexGrow: 2 }}></div>
        <div>
          <Link to="add-patient">
            <button className={classes.roundedButton}>New Patient</button>
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
          <button className={classes.searchButton}>Search</button>
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
