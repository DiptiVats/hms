import classes from "./MakePayment.module.css";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import { url } from "../util/url";
export default function MakePayment() {
  const { data1, data2 } = useLoaderData();
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_child}>
        <div className={classes.wrapper_child_1}>
          <p>Payment</p>
          <div>
            <Link>Shree Krinshna Hosptital</Link>&nbsp; / Payment
          </div>
        </div>
      </div>
      <div>
        <Form method="post">
          <div className={classes.firstInputSection}>
            <div>
              <input
                type="text"
                style={{ width: "24rem", height: "1.3rem", color: "orange" }}
                value={data1.name}
                name="patId"
                readOnly
              />
            </div>
            <div>
              <select
                style={{
                  width: "24rem",
                  height: "2.1rem",
                  marginTop: "0.1rem",
                  borderRadius: "3px",
                }}
              >
                <option name="OPD" value="OPD">
                  OPD
                </option>
                <option name="X-Ray" value="X-Ray">
                  X-Ray
                </option>
              </select>
            </div>

            <div>
              <input
                type="number"
                style={{ width: "24rem", height: "1.3rem" }}
                placeholder="payment Amount"
                name="payAmt"
              />
            </div>
          </div>
          <div className={classes.firstInputSection}>
            <div>
              <input
                type="text"
                style={{ width: "24rem", height: "1.3rem", color: "orange" }}
                value={new Date().toISOString().split("T")[0]}
                name="today"
                readOnly
              />
            </div>
            <div>
              <select
                name="payType"
                style={{
                  width: "24rem",
                  height: "2.1rem",
                  marginTop: "0.1rem",
                  borderRadius: "3px",
                }}
              >
                <option value="cash" name="cash">
                  Cash
                </option>
                <option value="online" name="online">
                  Online
                </option>
              </select>
            </div>
            <div>
              <select
                name="payValidate"
                value="payValidate"
                style={{
                  width: "24rem",
                  height: "2.1rem",
                  marginTop: "0.1rem",
                  borderRadius: "3px",
                }}
              >
                <option value="valid" name="payValidate">
                  Valid
                </option>
                <option value="invalid" name="payValidate">
                  invalid
                </option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              style={{
                float: "right",
                marginRight: "75px",
                backgroundColor: "#007bff",
                width: "10rem",
                marginTop: "1rem",
              }}
            >
              Add Payment
            </button>
          </div>
        </Form>
      </div>
      <br />
      <br />
      <br />

      <p>
        <b>Today Payment Detail</b>
      </p>
      {data2 ? (
        <div className={classes.paymentDetailSection}>
          <div>
            <div>
              <div>
                <b>Date</b>
              </div>
              <p>{data2.payDateSelf}</p>
            </div>
            <div>
              <div>
                <b>Token</b>
              </div>
              <p>{data2.payTokken}</p>
            </div>
            <div>
              <div>
                <b>Type</b>
              </div>
              <p>{data2.payType}</p>
            </div>
            <div>
              <div>
                <b>Amount</b>
              </div>
              <p>{data2.payAmt}</p>
            </div>
          </div>
        </div>
      ) : (
        <center>
          <hr color="grey" />
          <p style={{ color: "red", fontSize: "1.2rem" }}>No payment yet</p>
        </center>
      )}
    </div>
  );
}

export async function loader({ request }) {
  const token = localStorage.getItem("token");
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());

  if (token) {
    try {
      const response1 = await fetch(`${url}/Patient/loadPatient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ patId: param.patId }),
      });

      const resData1 = await response1.json();
      console.log("Name : ", resData1.name);

      // --------------------- for payment Data ------------------------
      const response2 = await fetch(`${url}/Payment/loadPayment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ patId: param.patId }),
      });
      const resData2 = await response2.text();
      console.log("response : ", resData2);

      if (resData2 === "null") {
        console.log("is null");
      }
      return { data1: resData1, data2: JSON.parse(resData2) };
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    return redirect("/");
  }
}

export async function action({ request }) {
  const token = localStorage.getItem("token");
  const data = await request.formData();
  const CurrentUrl = new URL(request.url);
  const param = Object.fromEntries(CurrentUrl.searchParams.entries());
  const dataToSend = {
    userId: "guest",
    payPatId: param.patId,
    payAmount: data.get("payAmt"),
    payDate: new Date().toISOString(),
    payDateSelf: data.get("today"),
    payType: data.get("payType"),
    payValidate: data.get("payValidate"),
  };
  console.log("data to Send : ", dataToSend);
  try {
    const response = await fetch(`${url}/Payment/registerPayment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToSend),
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}

/*   
 "payPatId":78181,
  "payAmt": "500",
  "payDate": "2024-08-06T14:30:00Z",
  "payDateSelf": "2024-08-06",
  "payTokken": "987654321",
  "payType": "Credit Card",
  "payValidate": "Valid",
  "userId": "guest"
   */
