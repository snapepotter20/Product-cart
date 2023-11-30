import React from "react";


const Modal = ({setFlagFalse}) => {
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onClick={()=>setFlagFalse(false)}>&times;</span>
        {/* <button class="close" onClick={()=>setFlagFalse(false)}>Ok</button> */}
        <p>Product successfully deleted..</p>
      </div>
    </div>
  );
};

export default Modal;
