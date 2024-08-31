import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage, { action as loginFun } from "./pages/LoginPage";
import DashBoardLayoutPage from "./pages/DashBoardLayoutPage";
import Patient, {
  loader as patientLoaderFun,
} from "./components/PatientLayout/Patient";
import AddPatient, { action as patientAddFun } from "./components/AddPatient";
import Medicine, { loader as medicineListFun } from "./components/Medicine";
import AddMedicine, {
  action as addMedicineFun,
} from "./components/AddMedicine";
import IPD_Register from "./components/IPD_Register";
import Payment, { loader as paymentFun } from "./components/Payment";
import Reprint from "./components/Reprint";
import "firebase/auth";
import MakePayment, {
  loader as paymentLoader,
  action as paymentAction,
} from "./components/MakePayment";
import Admit from "./components/Admit";
import Consent from "./components/Consent";
import OPD_Main from "./components/OPD/OPD_Main";
import EditPatient, {
  action as editPatientFun,
} from "./components/EditPatient";
import { tokenLoader } from "./util/auth";
import patientLoaderUtilFun from "./util/utilitiFun.js";

const router = createBrowserRouter([
  { path: "", element: <LoginPage />, action: loginFun },
  {
    path: "dashboard",
    element: <DashBoardLayoutPage />,
    id: "patientData",
    children: [
      { path: "", element: <Patient />, loader: patientLoaderFun },
      {
        path: "/dashboard/add-patient",
        element: <AddPatient />,
        action: patientAddFun,
        loader: tokenLoader,
      },
      {
        path: "/dashboard/edit-patient",
        element: <EditPatient />,
        action: editPatientFun,
        loader: patientLoaderUtilFun,
      },
      { path: "medicine", element: <Medicine />, loader: medicineListFun },
      {
        path: "/dashboard/add-medicine",
        element: <AddMedicine />,
        action: addMedicineFun,
        loader: tokenLoader,
      },
      { path: "ipd-register", element: <IPD_Register />, loader: tokenLoader },
      { path: "payment-register", element: <Payment />, loader: paymentFun },
      { path: "reprint", element: <Reprint />, loader: tokenLoader },
      { path: "admit", element: <Admit />, loader: patientLoaderUtilFun },
      {
        path: "OPD",
        element: <OPD_Main />,
        loader: patientLoaderUtilFun,
      },
      {
        path: "make-payment",
        element: <MakePayment />,
        loader: paymentLoader,
        action: paymentAction,
      },
      { path: "consent", element: <Consent />, loader: tokenLoader },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
