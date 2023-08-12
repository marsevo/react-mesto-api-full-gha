class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      authorization: this._getAuthorizationHeader(),
    };
  }

  _getAuthorizationHeader() {
    const jwt = localStorage.getItem('jwt');
    return jwt ? `Bearer ${jwt}` : '';
  }

  _fetchWithHeaders(url, options) {
    return fetch(url, {
      ...options,
      headers: this._getHeaders(),
      credentials: 'include',
    }).then(res => this._checkResponse(res));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return this._fetchWithHeaders(`${this._baseUrl}/cards`, {
      method: 'GET',
    });
  }

  addNewCard(data) {
    return this._fetchWithHeaders(`${this._baseUrl}/cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
  }

  getUserInfoApi() {
    return this._fetchWithHeaders(`${this._baseUrl}/users/me`, {
      method: 'GET',
    });
  }

  setUserInfoApi(data) {
    return this._fetchWithHeaders(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
  }

  setUserAvatar(data) {
    return this._fetchWithHeaders(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
  }

  deleteCard(cardId) {
    return this._fetchWithHeaders(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
    });
  }

  toggleCardLikeStatus(cardId, isLiked) {
    return this._fetchWithHeaders(
      `${this._baseUrl}/cards/${cardId}/likes`,
      {
        method: isLiked ? 'DELETE' : 'PUT',
      }
    );
  }
}

// export const api = new Api({ baseUrl: 'http://localhost:3001' });
export const api = new Api({ baseUrl: 'https://api.mestomkha.nomoreparties.co' });
