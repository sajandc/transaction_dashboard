import React from "react";
import "./style.scss"

export default function Drawer(props) {
  const { id, open, children, onClose } = props;
  return (
    <div id={id} className="drawer-wrapper">
      {open && <div className="backdrop" onClick={onClose}></div>}
      <div
        id="drawer-content"
        className={`drawer
                ${open ? "drawer-open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
