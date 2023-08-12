import React from "react";

function InfoTooltip({ tooltipIcon, title, isOpen, onClose }) {

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__container-tooltip">
        <div className="popup__icon-tooltip">
          {tooltipIcon === "success" && (
            <img src={"/images/ok.svg"} alt="Статус Ок" />
          )}
          {tooltipIcon === "error" && <img src={"/images/error.svg"} alt="Статус Ошибка" />}
        </div>
        <h2 className="popup__title-tooltip">{title}</h2>
        <button type="button" className="popup__close" onClick={onClose} />
      </div>
    </div>
  )
}

export default InfoTooltip;
