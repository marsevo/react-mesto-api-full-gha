import React, { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick,  onCardLike, onCardDelete, cards }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar" onClick={onEditAvatar}>
            <img src={currentUser.avatar} alt={currentUser.name} className="profile__img" />
          </div>
          <div className="profile__info">
            <div className="profile__description">
              <h1 className="profile__title">{currentUser.name}</h1>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button className="profile__edit-button link" type="button" onClick={onEditProfile} />
          </div>
        </div>
        <button className="profile__add-button link" type="button" onClick={onAddPlace} />
      </section>
      <section className="cards">
        {
          cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} key={card._id} />
          ))
        }
      </section>
    </main>
  )
}

export default Main;