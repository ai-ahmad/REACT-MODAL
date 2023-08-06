import React from "react";
import "./moda.css"
const Modal = ({ children, closeModal }) => {

  return (
    <div className="modal-wrapper">
      <div className="modal">
            { children }
          <button onClick={closeModal} >Close</button>
      </div>
    </div>
  );
};

export default Modal;
