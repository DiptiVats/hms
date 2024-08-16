import classes from "./DashBoardLayoutPage.module.css";
import ohLogo from "../assets/oh_logo.jpg";
import TopRightNav from "../components/DashboardLayoutComps/TopRightNav";
import SideBar from "../components/DashboardLayoutComps/SideBar/SideBar";
import { Outlet, redirect } from "react-router";
import { url } from "../util/url";
export default function DashBoardLayoutPage() {
  return (
    <>
      <div className={classes.mainNavWrapper}>
        <div className={classes.firstPartition}>
          <div className={classes.topLeftNav}>
            <img src={ohLogo} className={classes.topLeftImg} />
          </div>
          <div className={classes.bottomLeftNav}>
            <SideBar />
          </div>
        </div>
        <div className={classes.secondPartition}>
          <div className={classes.topRightNav}>
            <TopRightNav />
          </div>

          <div className={classes.bottomRightNav}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export async function loader({ request }) {
  // checking if token is there
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const CurrentUrl = new URL(request.url);
      const param = Object.fromEntries(CurrentUrl.searchParams.entries());
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
        Url = `${url}/Patient/loadPatient`;
        fetchBlock = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(param),
        };
      }

      const response = await fetch(Url, fetchBlock);
      console.log(response);
      const resData = await response.json();
      return resData;
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    return redirect("/");
  }
}
