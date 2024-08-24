import OPD_Header from "./OPD_Header";
import classes from "./OPD_Main.module.css";
import { Link, useLoaderData } from "react-router-dom";
import { opdArr1, opdArr2 } from "./opdArray";
import { useState } from "react";
export default function OPD_Main() {
  const patientData = useLoaderData();
  const [selectedMedicines, setSelectedMedicines] = useState({});

  return (
    <div className={classes.opdWrapper}>
      <OPD_Header patData={patientData} />
      <div className={classes.opdMainWrapper}>
        <div className={classes.firstWrapper}>
          <p>Notes</p>
          <div>
            <ul>
              {opdArr1.map((data, index) => (
                <li key={[index]}>
                  <input type="checkbox" value={data} />
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
                <input
                  type="text"
                  placeholder="Treatment"
                  className={classes.inputSame}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------- */}
        <div className={classes.thirdWrapper}>
          <p>Treatment</p>
          <div>
            <ul>
              {opdArr2.map((data) => (
                <li key={data}>
                  <input type="checkbox" />
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
