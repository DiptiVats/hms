import { Link, redirect, useLoaderData } from "react-router-dom";
import classes from "./Medicine.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { url } from "../util/url";
export default function Medicine() {
  const medicineList = useLoaderData();
  console.log(medicineList);
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.topWrapper}>
        <div className={classes.patientText}>Medicine</div>
        <div style={{ flexGrow: 2 }}></div>
        <div>
          <Link to="/dashboard/add-medicine">
            <button className={classes.roundedButton}>Add Medicine</button>
          </Link>
        </div>
      </div>
      <div className={classes.hospitalName}>
        <Link to="/dashboard">Shri Krishna Hospital &nbsp;</Link>/&nbsp;
        Medicine
      </div>
      <br />
      &nbsp;
      <span style={{ color: "orange" }}>Medicine List</span>
      <table>
        <thead>
          <tr>
            <td>SR No.</td>
            <td>Code</td>
            <td>Category</td>
            <td>Short Desc</td>
            <td>Long Desc</td>
            <td>Disp. Order</td>
            <td>Side</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {medicineList.map((data) => (
            <tr key={data.medId}>
              <td>{data.medId}</td>
              <td>{data.medCode}</td>
              <td>{data.medCat}</td>
              <td>{data.shortDesc}</td>
              <td>{data.longDesc}</td>
              <td>{data.disOrder}</td>
              <td>{data.medSide}</td>
              <td>
                <FaEdit style={{ color: "#007bff" }} />
                &nbsp; &nbsp;
                <RiDeleteBin6Line style={{ color: "red" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function loader() {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    try {
      const response = await fetch(`${url}/Medicine/loadAllMedicines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("data Fetched");
      const resData = response.json();
      console.log(resData);
      return resData;
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    return redirect("/");
  }
}
