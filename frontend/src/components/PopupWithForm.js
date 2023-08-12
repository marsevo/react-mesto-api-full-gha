import React from "react";

 function PopupWithForm({ name, title, onClose, isOpen, children, onSubmit }) {

   return (
     <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
       <div className="popup__container">
         <button className="popup__close link" type="button" aria-label="Close" onClick={onClose}></button>
         <h2 className="popup__title">{title}</h2>
         <form className={`popup__form popup__form_type_${name}`} name={`form-${name}`} onSubmit={onSubmit} noValidate>
           {children}
           <button className="popup__submit link" type="submit">Сохранить</button>
         </form>
       </div>
     </div>
   )
 }

 export default PopupWithForm;