import classes from "./MakePayment.module.css";
import { Link } from "react-router-dom";
export default function MakePayment() {
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
        <div className={classes.firstInputSection}>
          <div>
            <input
              type="text"
              style={{ width: "35rem", height: "1.3rem" }}
              placeholder="On Account Of"
              name="onAccOf"
            />
          </div>
          <div>
            <input
              type="text"
              style={{ width: "18rem", height: "1.3rem" }}
              placeholder="Token No."
              name="paymentToken"
            />
          </div>
          <div>
            <input
              type="text"
              style={{ width: "18rem", height: "1.3rem" }}
              placeholder="Recived Amount"
              name="recivedAmount"
            />
          </div>
        </div>
        <div className={classes.firstInputSection}>
          <div>
            <input
              type="text"
              style={{ width: "35rem", height: "1.3rem" }}
              placeholder="Patient Name"
              name="patientName"
            />
          </div>
          <div>
            <input
              type="text"
              style={{ width: "18rem", height: "1.3rem" }}
              placeholder="Age"
              name="Age"
            />
          </div>
          <div>
            <input
              type="text"
              style={{ width: "18rem", height: "1.3rem" }}
              placeholder="Date"
              name="date"
            />
          </div>
        </div>
        <div className={classes.firstInputSection}>
          <div>
            <input
              type="text"
              style={{ width: "35rem", height: "1.3rem" }}
              placeholder="Father Name"
              name="fatherName"
            />
          </div>
          <div>
            <input
              type="text"
              style={{ width: "38.5rem", height: "1.3rem" }}
              placeholder="Address*"
              name="address"
            />
          </div>
        </div>
      </div>
      <p>
        <b>Today Payment Detail</b>
      </p>
      <div className={classes.paymentDetailSection}>
        <div>
          <div>
            <div>
              <b>Date</b>
            </div>
            <p>34-34-23</p>
          </div>
          <div>
            <div>
              <b>Token</b>
            </div>
            <p>1</p>
          </div>
          <div>
            <div>
              <b>Type</b>
            </div>
            <p>OPD</p>
          </div>
          <div>
            <div>
              <b>Amount</b>
            </div>
            <p>300</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader() {}

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
