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
  const userId = req.params.userId;
  User.updateUserById(userId, req.body).then(user => {
    console.log(user)
    return User.findUserById(user._id);
  }).then(user => {
    res.success(user);
  }).catch(next);
}

// userController.addFans = (req, res, next) => {

// }

userController.removeFans = (req, res, next) => {
  const userId = req.params.userId;
  const fansId = req.params.fansId;
  User.removeFans(userId, fansId).then(user => {
    return User.getAllFansByUserId(user._id);
  }).then(fans => {
    res.success(fans);
  }).catch(next);
}

userController.getAllFansByUserId = (req, res, next) => {
  const userId = req.params.userId;
  User.getAllFansByUserId(userId).then(user => {
    res.success(user.fans);
  }).catch(next);
}

userController.addFollow = (req, res, next) => {
  const userId = req.params.userId;
  const followId = req.params.followId;
  User.addFollow(userId, followId).then(user => {
    return User.getAllFollowsByUserId(user._id);
  }).then(follows => {
    res.success(follows);
  }).catch(next);
}

userController.removeFollow = (req, res, next) => {
  const userId = req.params.userId;
  const followId = req.params.followId;
  User.removeFollow(userId, followId).then(user => {
    return User.getAllFollowsByUserId(user._id);
  }).then(follows => {
    res.success(follows);
  }).catch(next);
}

userController.getAllFollowsByUserId = (req, res, next) => {
  const userId = req.params.userId;
  User.getAllFollowsByUserId(userId).then(user => {
    res.success(user.follow);
  }).catch(next);
}

userController.authorize = (req, res, next) => {
  const body = req.body;
  User.getAuth(body.username, body.password).then(user => {
    // if (user) {
    //   const token = jwt.create({ name: body.username });
    //   res.success({ token: token });
    // } else {
    //   next(new HttpError.BadRequestError('Username or password error'));
    // }
    res.success(user);
  }).catch(next);
};

module.exports = userController;