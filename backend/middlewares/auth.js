const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const ErrorAuth = require('../errors/errorAuth');

const errorAuthMessage = 'Необходимо авторизоваться';

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      throw new ErrorAuth(errorAuthMessage);
    }
    const token = authorization.replace('Bearer ', '');
    const payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    req.user = payload;
    next();
  } catch (err) {
    next(new ErrorAuth(errorAuthMessage));
  }
};

module.exports = auth;
