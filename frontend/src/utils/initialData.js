// const initialCards = [
//     {
//       name: "Архыз",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//     },
//     {
//       name: "Челябинская область",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//     },
//     {
//       name: "Иваново",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//     },
//     {
//       name: "Камчатка",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//     },
//     {
//       name: "Холмогорский район",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//     },
//     {
//       name: "Байкал",
//       link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//     },
//   ];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_visible'
}

// // для обращения к серверу
// const apiConfig = {
//   // url: 'https://mesto.nomoreparties.co/v1/cohort-65',
//   url: 'http://localhost:3000',
//   headers: {
//     'Content-Type': "application/json",
//     // authorization: '1a48e126-c8ad-4352-ad29-ef240d05bcd2'
//   },
//   credentials: 'include',
// }

export { validationConfig };