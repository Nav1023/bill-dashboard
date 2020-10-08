import React from "react";
import "./index.css";

function index({ children, isOpen }) {
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  ) : null;
}

export default index;
