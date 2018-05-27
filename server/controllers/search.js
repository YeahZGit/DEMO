const HttpError = require('some-http-error');
const User = require('../models').User;
const Dynamics = require('../models').Dynamics;
const userService  = require('../services').userService;

const searchController = {};

searchController.search = (req, res, next) => {
  const query = req.body.query;
  const userId = req.body.userId;
  const obj = {};
  User.fuzzyQueryByUserName(query).then(users => {
    return userService.addIsFollow(userId, users);
  }).then(users => {
    obj.users = users;
    return Dynamics.fuzzyQuerByTitleAndContent(query);
  }).then(dynamics => {
    obj.dynamics = dynamics;
    res.success(obj);
  }).catch(next);
}

module.exports = searchController;