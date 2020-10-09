import React from "react";
import "./index.css";

function index({ children, isOpen, toggleModal }) {
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
      {children}
      <button className="close-btn" onClick={toggleModal}>&times;</button>
      </div>
    </div>
  ) : null;
}

export default index;
