import OPD_Header from "./OPD_Header";
import classes from "./OPD_Main.module.css";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { opdArr1, opdArr2 } from "./opdArray";
import { useState } from "react";
import { url } from "../../util/url";
import PopupLayout from "./PopupForCanva";
import PopupForNotes from "./PopupForNotes";
import CanvaForDrawing from "../PopUp/CanvaForDrawing";
export default function OPD_Main() {
  const { data1, data2 } = useLoaderData();
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedTreatment, setSelectedTreatment] = useState([]);
  const [day, setDay] = useState("");

  function handleDay(event) {
    setDay(event.target.value);
  }
  // -------------- function to Add Notes ------------------
  function handleAddNotes(event, val) {
    const check = event.target.checked;

    if (check) {
      setSelectedNotes((prevState) => {
        return [...prevState, val];
      });
    } else {
      setSelectedNotes((prevState) => prevState.filter((prev) => prev !== val));
    }
  }
  // -------------- function to Add Treatments ------------------
  function handleAddTreatment(event, val) {
    const check = event.target.checked;
    if (check) {
      setSelectedTreatment((prevState) => {
        return [...prevState, val];
      });
    } else {
      setSelectedTreatment((prevState) =>
        prevState.filter((prev) => prev !== val)
      );
    }
  }
  return (
    <div className={classes.opdWrapper}>
      <OPD_Header patData1={data1} patData2={data2} />
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
                    onClick={(event) => handleAddNotes(event, data)}
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
                <select value={day} onChange={handleDay}>
                  <option value="">Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
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
                <p style={{ lineHeight: 0, color: "orange" }}>Treatment</p>
                <div
                  type="text"
                  placeholder="Treatment"
                  className={classes.inputSame}
                  style={{ lineHeight: 0, overflowY: "scroll" }}
                >
                  {selectedTreatment.map((med) => (
                    <p key={med} style={{ lineHeight: "2px" }}>
                      {med}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ lineHeight: 0, color: "orange" }}>Notes</p>
                <div
                  type="text"
                  placeholder="notes"
                  className={classes.inputSame}
                  style={{ lineHeight: 0, overflowY: "scroll" }}
                >
                  {selectedNotes.map((note) => (
                    <div key={note} style={{ lineHeight: "2px" }}>
                      {note} {day && ` x ${day}`}
                    </div>
                  ))}
                </div>
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
                  <input
                    type="checkbox"
                    name={data}
                    onClick={(event) => handleAddTreatment(event, data)}
                  />
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
          <PopupLayout patData={data2} buttonVal="Enter note">
            <div
              style={{
                backgroundColor: "transparent",
              }}
            >
              <CanvaForDrawing />
            </div>
          </PopupLayout>
        </p>
        <p>
          <button style={{ backgroundColor: "#007bff" }}>Ok</button>
        </p>
        <p>
          {/* ------------------- popup for opd previous note ----------------------- */}
          <PopupForNotes>
            <div style={{ overflowY: "scroll", lineHeight: 0, color: "black" }}>
              {data2 ? (
                data2.map((data, index) => (
                  <div key={[index]}>
                    {data.opdNote.split("\n").map((arr) => (
                      <p>{arr}</p>
                    ))}
                  </div>
                ))
              ) : (
                <p style={{ color: "black" }}>There is no previous note !</p>
              )}
            </div>
          </PopupForNotes>
        </p>
      </div>
    </div>
  );
}

export async function loader({ request }) {
  const token = localStorage.getItem("token");
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());

  // ----------- checking if token is there or not ---------------------
  if (token) {
    try {
      // ------------------- request to load single data ---------------------
      const response1 = await fetch(`${url}/Patient/loadPatient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(param),
      });
      const resData1 = await response1.json();
      // -------------------- request to load OPD details ----------------------
      const response2 = await fetch(`${url}/Opd/loadPreviousNotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(param),
      });
      if (response1.status === 400) {
        localStorage.removeItem("token");
        return redirect("/");
      }
      const resData2 = await response2.json();
      return { data1: resData1, data2: resData2 };
    } catch (err) {
      return err;
    }
  } else {
    redirect("/");
  }
}
