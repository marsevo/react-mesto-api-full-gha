import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    // Подписка на контекст
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="profile"
            id="edit-popup"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <input
                id="user-name-input"
                type="text"
                name="name"
                className="popup__text"
                placeholder="Укажите имя"
                minLength="2"
                maxLength="40"
                required
                onChange={(evt) => setName(evt.target.value)}
                value={name || ''} />
            <span id="user-name-input-error" className="popup__error"></span>
            <input
                id="user-about-input"
                type="text"
                name="about"
                className="popup__text"
                placeholder="Укажите професcию"
                minLength="2"
                maxLength="200"
                required
                onChange={(evt) => setDescription(evt.target.value)}
                value={description || ''} />
            <span id="user-about-input-error" className="popup__error"></span>
        </PopupWithForm>
    )
}
export default EditProfilePopup;