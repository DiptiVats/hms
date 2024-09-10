import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom";
import classes from "./Medicine.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import SearchForm from "../components/PatientLayout/SearchForm";
import { FaEdit } from "react-icons/fa";
import { url } from "../util/url";
export default function Medicine() {
  const medicineList = useLoaderData();

  const navigate = useNavigate();
  async function DeletePatient(medicine) {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        if (window.confirm("Are you really want to delete the medicine ")) {
          const response = await fetch(`${url}/Medicine/deleteMedicine`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ medId: medicine.medId }),
          });
          const resData = await response.json();
          navigate("/dashboard/medicine");
          console.log(resData);
        }
      }
      return redirect("/");
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  return (
    <div className={classes.mainWrapper}>
      <div style={{ marginTop: "2rem" }} className={classes.formWrapper}>
        <SearchForm
          text="Search By Medicine Code"
          heading="Medicine"
          buttonText="Add Medicine"
          val="medId"
          route="/medicine"
        />
      </div>

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
            <td>edit</td>
            <td>delete</td>
          </tr>
        </thead>
        <tbody>
          {medicineList !== "null" ? (
            medicineList.map((data) => (
              <tr key={data.medId}>
                <td>{data.medId}</td>
                <td>{data.medCode}</td>
                <td>{data.medCat}</td>
                <td>{data.shortDesc}</td>
                <td>{data.longDesc}</td>
                <td>{data.disOrder}</td>
                <td style={{ width: "4rem" }}>{data.medSide}</td>
                <td>
                  <Link to={`/dashboard/add-medicine?medId=${data.medId}`}>
                    <button type="button">
                      <FaEdit style={{ color: " white" }} />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className={classes.deleteButton}
                    style={{ width: "3rem" }}
                    type="submit"
                    onClick={() => DeletePatient(data)}
                  >
                    <RiDeleteBin6Line className={classes.deleteIcon} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <th
              colSpan={9}
              style={{
                backgroundColor: "transparent",
                height: "6rem",
                fontSize: "1.2rem",
              }}
            >
              no medicine list !
            </th>
          )}
        </tbody>
      </table>
    </div>
  );
}

export async function loader({ request }) {
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  console.log(param);
  const token = localStorage.getItem("token");

  // ------------------------ load All medicine -------------------------------
  let Url = `${url}/Medicine/loadAllMedicines`;
  let fetchBlock = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (param.medId) {
    Url = `${url}/Medicine/loadMedicine`;
    fetchBlock = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(param),
    };
  }

  if (token) {
    try {
      const response = await fetch(Url, fetchBlock);
      if (response.status === 400) {
        localStorage.removeItem("token");
        return redirect("/");
      }
      const resData = await response.json();
      console.log(resData);
      if (resData.length === undefined) {
        return [resData];
      }
      return resData;
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    return redirect("/");
  }
}
