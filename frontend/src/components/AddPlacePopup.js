import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [placeName, setPlaceName] = React.useState("");
    const [placeLink, setPlaceLink] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: placeName,
            link: placeLink,
        });
    }

    React.useEffect(() => {
        setPlaceName("");
        setPlaceLink("");
    }, [isOpen])


    return (
        <PopupWithForm
            name="place"
            id="add-popup"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <input
                id="name-title"
                type="text"
                name="name"
                className="popup__text"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
                value={placeName || ""}
                onChange={(e) => setPlaceName(e.target.value)} />
            <span id="place-name-error" className="popup__error"></span>
            <input
                id="url-title"
                type="url"
                name="link"
                className="popup__text"
                placeholder="Ссылка на картинку"
                required
                value={placeLink || ""}
                onChange={(e) => setPlaceLink(e.target.value)} />
            <span id="image-link-error" className="popup__error"></span>
        </PopupWithForm>

    )
}

export default AddPlacePopup;