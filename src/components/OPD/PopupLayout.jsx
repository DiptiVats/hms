import { useRef } from "react";
import classes from "./PopupLayout.module.css";
export default function PopupLayout({ patData }) {
  console.log(patData);
  const dialogRef = useRef();
  function showPopup() {
    dialogRef.current.showModal();
  }
  function closeModal() {
    dialogRef.current.close();
  }
  const data = patData[0].opdNote.split("\n");
  console.log(data);
  return (
    <>
      {/* ------------ dialog section -------------------- */}
      <dialog ref={dialogRef} className={classes.myDialog}>
        <div style={{ overflowY: "scroll", height: "18rem" }}>
          {patData &&
            patData.map((data, index) => (
              <div key={[index]}>
                {data.opdNote.split("\n").map((arr) => (
                  <p>{arr}</p>
                ))}
              </div>
            ))}
          {patData && <p>Not Previous notes</p>}
        </div>
        <br />
        <br />

        <button onClick={closeModal} style={{ float: "right" }}>
          close
        </button>
      </dialog>
      {/* ------------ button section -------------------- */}
      <button onClick={showPopup} style={{ backgroundColor: "blue" }}>
        View Previous Notes
      </button>
    </>
  );
}
