import { useRef } from "react";
import classes from "./PopupLayout.module.css";
export default function PopupLayout({ patData }) {
  /*const dialogRef = useRef();
  console.log("image base64 : ", patData[0].opdImage);
  function showPopup() {
    dialogRef.current.showModal();
  }
  function closeModal() {
    dialogRef.current.close();
  }
  const opdImage = patData[0].opdImage;
  if (patData.length === undefined) {
    opdImage = patData.opdImage;
  }*/
  return (
    <p>
      {/* ------------ dialog section -------------------- */}
      <p>
        <dialog ref={dialogRef} className={classes.myDialog}>
          <button onClick={closeModal}>close</button>
          <div></div>
        </dialog>
      </p>

      {/* ------------ button section -------------------- */}
      <button onClick={showPopup} style={{ backgroundColor: "blue" }}>
        View Previous Notes
      </button>
    </p>
  );
}
