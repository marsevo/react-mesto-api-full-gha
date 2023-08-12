import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

 function Card({ card, onCardClick, onCardLike, onCardDelete }) {
   const handleClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);
   const handleDeleteClick = () => onCardDelete(card);

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((card) => card === currentUser._id);
  const cardLikeButtonClassName = (`card__like-button ${isLiked && 'card__like-button_active'}`);

   return (
    <CurrentUserContext.Provider value={currentUser}>
     <article className="card">
     {isOwn && (
        <button className="card__delete-button" onClick={handleDeleteClick}></button>
      )}
       <img className="card__image" alt={card.name} src={card.link} onClick={handleClick} />
         <div className="card__description">
           <h2 className="card__title">{card.name}</h2>
           <div className="card__like-container">
           <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
             <span className="card__like-counter">{card.likes.length}</span>
           </div>
         </div>
     </article>
     </CurrentUserContext.Provider>
   )
 }

 export default Card;