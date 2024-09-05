import { Link, Form, redirect, useLoaderData } from "react-router-dom";
import classes from "./AddMedicine.module.css";
import { url } from "../util/url";
export default function AddMedicine() {
  const medData = useLoaderData();
  const urlParams = new URLSearchParams(location.search);
  const value = urlParams.get("medId");
  return (
    <div className={classes.mainWrapper}>
      <div>
        <div className={classes.patientText}>
          {value ? "Edit Medicine" : "Add Medicine"}
        </div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link> /&nbsp;
        <Link to="/dashboard/medicine"> Medicines</Link>&nbsp; / &nbsp;{" "}
        {value ? "Edit Medicine" : "Add Medicine"}
      </div>
      {/* ---- first ----------*/}
      <Form method="post">
        <div method="post" className={classes.firstGrid}>
          <select name="medicineCode">
            <option selected={!medData}>Select Medicine Code</option>
            <option selected={medData && medData.medCode === "I001"}>
              I001
            </option>
            <option selected={medData && medData.medCode === "TR001"}>
              TR001
            </option>
            <option selected={medData && medData.medCode === "TB001"}>
              TB001
            </option>
            <option selected={medData && medData.medCode === "OL001"}>
              OL001
            </option>
            <option selected={medData && medData.medCode === "SR001"}>
              SR001
            </option>
          </select>
          <select id="second" name="medicineCatagory">
            <option>Select Medicine Catagory</option>
            <option selected={medData && medData.medCat === "Inj"}>Inj</option>
            <option selected={medData && medData.medCat === "TB"}>TB</option>
            <option selected={medData && medData.medCat === "TR"}>TR</option>
            <option selected={medData && medData.medCat === "OL"}>OL</option>
            <option selected={medData && medData.medCat === "SR"}>SR</option>
          </select>
        </div>
        {/* ---- first ----------*/}
        <div className={classes.secondGrid}>
          <input
            type="text"
            name="medicineShortDesc"
            placeholder="Medicine Short Desc."
            defaultValue={medData ? medData.shortDesc : null}
          ></input>
          <input
            type="text"
            id="sec"
            name="displayOrder"
            placeholder="Medicine Display Order"
            defaultValue={medData ? medData.disOrder : null}
          ></input>
        </div>
        <div className={classes.thirdGrid}>
          <div>
            <input
              type="text"
              name="medicineLongDesc"
              placeholder="Medicine Long Desc."
              defaultValue={medData ? medData.longDesc : null}
            />
          </div>

          <div className={classes.thirdGridElem}>
            <p>Medicine Display Side:</p>&nbsp;&nbsp;
            <div>
              <input
                type="radio"
                name="direction"
                value="right"
                defaultChecked={medData && medData.medSide === "right"}
              />
              Right&nbsp;&nbsp;
            </div>
            <div>
              <input
                type="radio"
                name="direction"
                value="left"
                defaultChecked={medData && medData.medSide === "left"}
              />
              Left &nbsp;
            </div>
          </div>
          <br />
        </div>
        <div className={classes.sixthGrid}>
          <Link to="..">
            <button type="button">Cancel</button>
          </Link>
          <button type="submit">Add Medicine</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  const data = await request.formData();
  console.log(param);

  const temData = {
    disOrder: data.get("displayOrder"),
    longDesc: data.get("medicineLongDesc"),
    medCat: data.get("medicineCatagory"),
    medCode: data.get("medicineCode"),
    medSide: data.get("direction"),
    shortDesc: data.get("medicineShortDesc"),
  };
  let dataToSend = {
    ...temData,
  };
  let medUrl = `${url}/Medicine/addMedicine`;
  // ----------------------------- updating the url and data if user wants to edit the medicine-------------------
  if (param.medId) {
    dataToSend = {
      ...temData,
      medId: param.medId,
    };
    medUrl = `${url}/Medicine/updateMedicine`;
  }

  const response = await fetch(medUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  if (response.status === 400) {
    localStorage.removeItem("token");
    return redirect("/");
  }
  return response.json(), redirect("/dashboard/medicine");
}

// ------------------ Medicine Loader Function --------------------------------

export async function loader({ request }) {
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  const token = localStorage.getItem("token");
  if (token) {
    if (param.medId) {
      const response = await fetch(`${url}/Medicine/loadMedicine`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(param),
      });
      const resData = await response.json();
      console.log(resData);
      return resData;
    } else {
      return null;
    }
  }
  localStorage.removeItem("token");
  return redirect("/");
}
