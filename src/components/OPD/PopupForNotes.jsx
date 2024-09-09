import { useRef } from "react";
import classes from "./PopupForNotes.module.css";
export default function PopupLayout({ patData, children }) {
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
      <dialog ref={dialogRef} className={classes.popup}>
        {children}
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            right: "1rem",
            bottom: "1rem",
            backgroundColor: "grey",
          }}
        >
          Close
        </button>
      </dialog>
      <button style={{ backgroundColor: "blue" }} onClick={showPopup}>
        Previous Notes
      </button>
    </>
  );
}
