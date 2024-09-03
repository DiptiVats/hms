import OPD_Header from "./OPD_Header";
import classes from "./OPD_Main.module.css";
import { Link, useLoaderData } from "react-router-dom";
import { opdArr1, opdArr2 } from "./opdArray";
import { useState } from "react";
export default function OPD_Main() {
  const patientData = useLoaderData();
  console.log(opdArr1);
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  console.log(selectedMedicines);
  function handleAddMedicine(event, val) {
    console.log(val);
    const check = event.target.checked;
    if (check) {
      setSelectedMedicines((prevState) => {
        return [...prevState, val];
      });
    }
  }
  return (
    <div className={classes.opdWrapper}>
      <OPD_Header patData={patientData} />
      <div className={classes.opdMainWrapper}>
        <div className={classes.firstWrapper}>
          <p>Notes</p>
          <div>
            <ul>
              {/* ------------------- OPD Treatment Data ---------------------  */}
              {opdArr1.map((data) => (
                <li key={data}>
                  <input
                    type="checkbox"
                    value={data}
                    onClick={(event) => handleAddMedicine(event, data)}
                  />
                  &nbsp;
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* --------------------------------------------------------- */}

        <div className={classes.secondWrapper}>
          <p>Diagnosis</p>
          <div>
            <div>
              <div>
                <input type="checkbox" /> M &nbsp;
                <input type="checkbox" /> A &nbsp;
                <input type="checkbox" /> E &nbsp;
              </div>

              <div>
                <select>
                  <option>Day</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            <div className={classes.inputFlex}>
              <div>
                <input
                  type="text"
                  placeholder="Diagnosis"
                  className={classes.inputFirst}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Notes"
                  className={classes.inputSame}
                />
              </div>
              <div>
                <div
                  type="text"
                  placeholder="Treatment"
                  className={classes.inputSame}
                  contentEditable
                  style={{ lineHeight: 0 }}
                  
                />
                {selectedMedicines.map((med) => (
                  <p>{med}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* -----------------------------  ---------------------------- */}
        <div className={classes.thirdWrapper}>
          <p>Treatment</p>
          <div>
            <ul>
              {opdArr2.map((data) => (
                <li key={data}>
                  <input type="checkbox" name={data} />
                  &nbsp;
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.buttonSection}>
        <p>
          <Link to="..">
            <button>Cancel</button>
          </Link>
        </p>
        <p>
          <button style={{ backgroundColor: "#2ea5c9" }}>Show Notes</button>
        </p>
        <p>
          <button style={{ backgroundColor: "#2ea5c9" }}>Enter Note</button>
        </p>
        <p>
          <button style={{ backgroundColor: "#007bff" }}>Ok</button>
        </p>
      </div>
    </div>
  );
}
