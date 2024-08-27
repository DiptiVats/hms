import classes from "./AddPatient.module.css";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { url } from "../util/url";

export default function EditPatient() {
  const patientDataToEdit = useLoaderData("patientData");
  return (
    <div className={classes.mainWrapper}>
      <div>
        <div className={classes.patientText}>Edit Patient</div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp; Edit
        Patient
      </div>
      <Form method="post">
        {/* ---------------------first grid ----------------*/}
        <div className={classes.firstGrid}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            defaultValue={patientDataToEdit.fname}
            required
          />
          <input
            type="text"
            name="secondName"
            placeholder="Last Name*"
            defaultValue={patientDataToEdit.lname}
            required
          />
        </div>
        {/* --------------------- second grid ----------------*/}
        <div className={classes.secondGrid}>
          <input
            type="number"
            name="age"
            className={classes.firstGridInp}
            defaultValue={patientDataToEdit.age}
            required
          />

          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              defaultChecked={patientDataToEdit === "m"}
              readOnly
            />
            <label htmlFor="male"> Male </label>

            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              defaultChecked={patientDataToEdit === "f"}
              readOnly
            />
            <label htmlFor="female"> Female </label>
          </div>

          <input
            type="text"
            name="address"
            defaultValue={patientDataToEdit.address}
            required
          />
        </div>
        {/* --------------------- third grid ----------------*/}
        <div className={classes.thirdGrid}>
          <input type="text" name="city" placeholder="City" />
          <input
            type="number"
            name="telephone"
            placeholder="Telephone"
            defaultValue={patientDataToEdit.telephone}
            minLength="10"
          />
          <input type="text" name="nextkin" placeholder="Nextkin" />
          <select name="bloodGroup">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>o+</option>
            <option>o-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
        </div>
        {/* --------------------- fourth grid ----------------*/}
        <div className={classes.fourthGrid}>
          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            defaultValue={patientDataToEdit.fatherName}
          />
          <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            defaultValue={patientDataToEdit.motherName}
          />
          <input
            type="text"
            name="taxNumID"
            placeholder="Tax Number ID"
            defaultValue={patientDataToEdit.taxCode}
          />
        </div>
        <div className={classes.fifthGrid}>
          <div>Note</div>
          <div>
            <textarea
              name="patNote"
              defaultValue={patientDataToEdit.patNote}
            ></textarea>
          </div>
        </div>
        {/* --------------------- sixth grid ----------------*/}

        <div className={classes.sixthGrid}>
          <Link to="/dashboard">
            <button type="button">Cancel</button>
          </Link>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const token = localStorage.getItem("token");
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  const patId = param.patId;
  const data = await request.formData();
  const dataToSend = {
    patId: patId,
    firstName: data.get("firstName"),
    lastName: data.get("secondName"),
    age: data.get("age"),
    patSex: data.get("gender"),
    address: data.get("address"),
    city: data.get("city"),
    telephone: data.get("telephone"),
    nextKin: data.get("nextkin"),
    bloodType: data.get("bloodGroup"),
    fatherName: data.get("fatherName"),
    motherName: data.get("motherName"),
    taxCode: data.get("taxNumID"),
    patNote: data.get("patNote"),
    timeStamp: new Date().toISOString(),
  };
  console.log(dataToSend);
  try {
    const response = await fetch(`${url}/Patient/editPatient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToSend),
    });
    console.log(response);
    return redirect("/dashboard");
  } catch (err) {
    console.log(err);
    return err;
  }
}

/*export async function loader({ request }) {
  const token = localStorage.getItem("token");
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  console.log("patient ID: ", param);
  try {
    const response = await fetch(`${url}/Patient/loadPatient`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(param),
    });
    console.log(response);
    const resData = await response.json();
    console.log("data  :", resData);
    return resData;
  } catch (err) {
    console.log(err);
    return err;
  }
}*/
