import React from "react";

 function ImagePopup({onClose, isOpen, card}) {

   return (
     <div className={`popup popup_type_image ${isOpen ? "popup_opened" : ""}`}>
     <div className="popup__wrapper ">
       <button className="popup__close" type="button" aria-label="Close" onClick={onClose}></button>
       <img className="popup__full-image" alt={card.name} src={card.link} />
       <p className="popup__caption">{card.name}</p>
     </div>
   </div>
   )
 }

 export default ImagePopup;