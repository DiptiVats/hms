import { Link } from "react-router-dom";
import classes from "./SearchForm.module.css";
import { FiSearch } from "react-icons/fi";
import { Form } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
export default function AddPatientForm({
  text,
  heading,
  buttonText,
  val,
  route,
}) {
  return (
    <div className={classes.formWrapper}>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>{heading}</div>
        <div style={{ flexGrow: 2 }}></div>
        <div>
          <Link to="add-patient">
            <button className={classes.roundedButton}>
              {buttonText === "Add Patient" && <IoMdPersonAdd />}
              &nbsp; {buttonText}
            </button>
          </Link>
        </div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp;
        {heading} Dashboard
      </div>
      <Form className={classes.formSection}>
        <div className={classes.patientEntry}>
          <input
            name={val}
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
          <Link to={`/dashboard${route}`}>
            <button type="button" className={classes.resetButton}>
              Reset All
            </button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
