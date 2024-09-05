import { Link, redirect, useLoaderData } from "react-router-dom";
import classes from "./Medicine.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { url } from "../util/url";
export default function Medicine() {
  const medicineList = useLoaderData();

  async function DeletePatient(medicine) {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await fetch(`${url}/Medicine/deleteMedicine`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ medId: medicine.medId }),
        });
        const resData = await response.json();
        console.log(resData);
        return redirect("/dashboard");
      }
      return redirect("/");
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  return (
    <div className={classes.mainWrapper}>
      <>
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
                <td style={{ display: "flex", flexDirection: "row" }}>
                  <Link to={`/dashboard/add-medicine?medId=${data.medId}`}>
                    <FaEdit style={{ color: "#007bff" }} />
                  </Link>
                  &nbsp; &nbsp;
                  <button
                    style={{ width: "3rem" }}
                    type="submit"
                    onClick={() => DeletePatient(data)}
                  >
                    <RiDeleteBin6Line style={{ color: "red" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export async function action({ request }) {
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
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
      if (response.status === 400) {
        localStorage.removeItem("token");
        return redirect("/");
      }
      const resData = response.json();
      return resData;
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    return redirect("/");
  }
}
