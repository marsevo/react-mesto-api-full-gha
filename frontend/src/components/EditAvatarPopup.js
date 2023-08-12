import React, { useContext, useRef } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar}) {

    // Подписка на контекст
    const currentUser = useContext(CurrentUserContext);
    const inputAvatar = useRef();

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
      
        inputAvatar.current.value = ''
    }, [currentUser, isOpen])

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
            /* Значение инпута, полученное с помощью рефа */
          avatar: inputAvatar.current.value,
        });
      } 


return (
    <PopupWithForm
        name="avatar"
        id="update-avatar"
        title="Обновить аватар"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}>
        <input
            id="link-avatar"
            ref={inputAvatar}
            type="url"
            name="avatar"
            className="popup__text"
            placeholder="Ссылка на аватар"
            required/>
        <span id="link-avatar-error" className="popup__error"></span>
    </PopupWithForm>
)
}
export default EditAvatarPopup;