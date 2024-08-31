import { FaEdit } from "react-icons/fa";
import { SlExclamation } from "react-icons/sl";
import classes from "./Patient.module.css";
import AddPatientForm from "./AddPatientForm";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { url } from "../../util/url";
import { redirect } from "react-router-dom";
export default function Patient() {
  const navigation = useNavigation();
  const patientData = useLoaderData("patientData");
  console.log(navigation.state === "loading");
  return (
    <div className={classes.patientDetail}>
      <div>
        <AddPatientForm />
      </div>
      <div className={classes.patientTable}>
        &nbsp; &nbsp; &nbsp;
        <span style={{ color: "orange" }}>Patient List</span>
        <table>
          <thead>
            <tr>
              <td>Sr No.</td>
              <td>Code</td>
              <td>Patient Detail</td>
              <td>
                Privious Payment
                <br /> Detail
              </td>
              <td>Admit</td>
              <td>OPD</td>
              <td>Payment</td>
              <td>Consent</td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            {patientData.length > 0 ? (
              patientData.map((data, index) => (
                <tr key={data.tokenId}>
                  <td>{[index + 1]}</td>
                  <td>{data.tokenId}</td>
                  <td>
                    {data.name} | {data.age} Yrs |{" "}
                    {data.gender === "M" || data.gender === "m"
                      ? "Male"
                      : "Female"}
                    <br />
                    Adderss: {data.address} <br />
                    Telephone: {data.telephone}
                  </td>
                  <td>
                    {data.prevPaymentDetail ? (
                      <span>
                        {`Rs.${data.prevPaymentDetail}`}{" "}
                        <SlExclamation className={classes.paymentIcon} />
                      </span>
                    ) : (
                      "NIL"
                    )}
                  </td>
                  <td>
                    <Link to={`/dashboard/admit?patId=${data.tokenId}`}>
                      <button>Admit</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/dashboard/opd?patId=${data.tokenId}`}>
                      <button type="button">OPD</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/dashboard/make-payment?patId=${data.tokenId}`}>
                      <button>Payment</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/dashboard/consent?patId=${data.tokenId}`}>
                      <button>Consent</button>
                    </Link>
                  </td>
                  <td>
                    <span>
                      <Link
                        to={`/dashboard/edit-patient?patId=${data.tokenId}`}
                      >
                        <FaEdit className={classes.editIcon} />
                      </Link>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th
                  style={{
                    borderTopWidth: "2rem",
                    backgroundColor: "#22252a",
                  }}
                  colSpan={9}
                >
                  No Records!
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export async function loader({ request }) {
  // checking if token is there
  const token = localStorage.getItem("token");
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());

  if (token) {
    try {
      console.log(param);

      // ------------- loading all the patient data ---------------------
      let Url = `${url}/Patient/loadAllPatient`;
      let fetchBlock = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      console.log(token);

      // ------------- loading patient data ---------------------
      if (param.patId) {
        let dataToSend = { patId: param.patId };
        if (param.patId.length === 10) {
          dataToSend = { patTele: param.patId };
        } else if (param.patId === String) {
          console.log("string");
        }
        Url = `${url}/Patient/loadPatient`;
        fetchBlock = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dataToSend),
        };
      }
      const response = await fetch(Url, fetchBlock);
      if (response.status === 400) {
        localStorage.removeItem("token");
        return redirect("/");
      }
      console.log(response);
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
