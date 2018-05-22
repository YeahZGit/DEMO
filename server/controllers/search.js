const HttpError = require('some-http-error');
const User = require('../models').User;
const Dynamics = require('../models').Dynamics;

const searchController = {};

searchController.search = (req, res, next) => {
  const query = req.params.query;
  const obj = {};
  User.fuzzyQueryByUserName(query).then(users => {
    obj.users = users;
    return Dynamics.fuzzyQuerByTitleAndContent(query);
  }).then(dynamics => {
    obj.dynamics = dynamics;
    res.success(obj);
  }).catch(next);
}

module.exports = searchController;