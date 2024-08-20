import { Link, useLoaderData } from "react-router-dom";
import classes from "./Admit.module.css";
export default function Admit() {
  const patientData = useLoaderData();
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>Admit Patient</div>
        <div style={{ flexGrow: 2 }}></div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp; Admit
        Patient
      </div>
      {/* --------- first grid* ---------------*/}
      <div className={classes.firstGrid}>
        <div className={classes.firstGridElem1}>
          <input type="text" defaultValue={patientData.name} />
        </div>
        <div className={classes.firstGridElem2}>
          <input type="text" defaultValue="ID No. 47" />
          <input type="text" defaultValue={patientData.fatherName} />
        </div>
      </div>
      {/* --------- second grid* ---------------*/}
      <div className={classes.secondGrid}>
        <div className={classes.secondGridElem1}>
          <div className={classes.firstPart}>
            <input type="text" defaultValue={patientData.age} />
          </div>
          <div className={classes.secondPart}>
            <span>Sex :</span>
            <div>
              <input
                type="radio"
                value="male"
                name="gender"
                defaultChecked={patientData.gender === "m"}
              />
            </div>
            <p>Male</p>
            <div>
              <input
                type="radio"
                value="female"
                name="gender"
                defaultChecked={patientData.gender === "f"}
              />
            </div>
            <p>Female</p>
          </div>
        </div>
        <div className={classes.secondGridElem2}>
          <input type="text" defaultValue={patientData.address} />
        </div>
      </div>
      {/* --------- third grid* ---------------*/}

      <div className={classes.thirdGrid}>
        <input type="text" defaultValue="Dr. Incharge: Anil Yadav" />
        <input type="text" defaultValue="DOA: 19 Jan 2020" />
        <input type="text" placeholder="Brought By" />
        <input type="text" defaultValue="Date: 19 Jan 2020" />
      </div>
      {/* --------- fourth grid* ---------------*/}

      <div className={classes.fourthGrid}>
        <div className={classes.fourthGridElem1}>
          <p>
            <b>Diagnosis Provisional</b>
          </p>
          <input type="text" />
        </div>
        <div className={classes.fourthGridElem2}>
          <p>
            <b>CLINICAL NOTES</b>
          </p>
          <input type="text" />
        </div>
      </div>
      {/* --------- fifth grid* ---------------*/}

      <div className={classes.fifthGrid}>
        <p>
          <b>TREATMENT</b>
        </p>
        <div>
          <input type="text" />
        </div>
      </div>
      {/* --------- sixth grid* ---------------*/}
      <div className={classes.sixthGrid}>
        <Link to="..">
          <button type="button">Cancel</button>
        </Link>
        <button type="submit">Add Medicine</button>
      </div>
    </div>
  );
}
