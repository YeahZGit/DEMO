const HttpError = require('some-http-error');
const User = require('../models').User;
const userController = {};

userController.addUser = (req, res, next) => {
  const body = Object.assign(new User(), req.body);
  User.addUser(body).then(user => {
    res.success(user);
  }).catch(next);
}

userController.updateUserById = (req, res, next) => {
  const userId = req.params.UserId;
  User.updateUserById(userId, req.body).then(user => {
    return User.findUserById(user._id);
  }).then(user => {
    res.success(user);
  }).catch(next);
}

userController.authorize = (req, res, next) => {
  const body = req.body;
  User.getAuth(body.username, body.password).then(user => {
    if (user) {
      const token = jwt.create({ name: body.username });
      res.success({ token: token });
    } else {
      next(new HttpError.BadRequestError('Username or password error'));
    }
  }).catch(next);
};
module.exports = userController;