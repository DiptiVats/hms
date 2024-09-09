import { useRef } from "react";
import classes from "./PopupForCanva.module.css";
import { FaThumbsUp } from "react-icons/fa6";

import { FaPencilAlt } from "react-icons/fa";
export default function PopupLayout({ patData, children, buttonVal }) {
  console.log(patData);
  const dialogRef = useRef();
  function showPopup() {
    dialogRef.current.showModal();
  }
  function closeModal() {
    dialogRef.current.close();
  }
  return (
    <>
      {/* ------------ dialog section -------------------- */}
      <dialog ref={dialogRef} className={classes.myDialog}>
        <div>{children}</div>
        <button
          onClick={closeModal}
          style={{ position: "absolute", bottom: "1rem", right: "1.5rem" }}
        >
          Close
        </button>
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "7rem",
            backgroundColor: "blue",
          }}
        >
          Done <FaThumbsUp />
        </button>
      </dialog>
      {/* ------------ button section -------------------- */}
      <button onClick={showPopup} style={{ backgroundColor: "#2ea5c9" }}>
        {buttonVal} <FaPencilAlt />
      </button>
    </>
  );
}
