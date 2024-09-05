import { useRef } from "react";
import classes from "./PopupLayout.module.css";
export default function PopupLayout({ patData }) {
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
        <button onClick={closeModal}>close</button>
        <div></div>
      </dialog>

      {/* ------------ button section -------------------- */}
      <button onClick={showPopup} style={{ backgroundColor: "blue" }}>
        View Previous Notes
      </button>
    </>
  );
}
