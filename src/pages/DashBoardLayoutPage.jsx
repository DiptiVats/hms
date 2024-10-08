import classes from "./DashBoardLayoutPage.module.css";
import ohLogo from "../assets/oh_logo.jpg";
import TopRightNav from "../components/DashboardLayoutComps/TopRightNav";
import SideBar from "../components/DashboardLayoutComps/SideBar/SideBar";
import { Outlet, useNavigation } from "react-router";
import { HashLoader } from "react-spinners";

export default function DashBoardLayoutPage() {
  const navigation = useNavigation();
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
            {navigation.state === "loading" ? (
              <HashLoader
                color="orange"
                cssOverride={{ marginTop: "15%", marginLeft: "45%" }}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
