import { NavLink } from "react-router-dom";
import classes from "./DropDownList.module.css";
export default function DorpDownList({ text1, text2, isClick, link1, link2 }) {
  return (
    <>
      <ul
        className={classes.unorderdLists}
        type="none"
        style={{
          display: isClick ? "block" : "none",
        }}
      >
        <li className={classes.list}>
          <NavLink
            to={link1}
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.links
            }
            end
          >
            <hr className={classes.horizontalRow} />

            {text1}
          </NavLink>
        </li>

        <li className={classes.list}>
          <NavLink
            to={link2}
            className={({ isActive }) =>
              isActive ? classes.activeLink : classes.links
            }
          >
            <hr className={classes.horizontalRow} />

            {text2}
          </NavLink>
        </li>
      </ul>
    </>
  );
}
