const User = require('../models').User;

const userService  = {};

userService.addIsFollow = (userId, users) => {
  return User.findUserById(userId).then(user => {
    const follows = user.follow;
    for (let i = 0; i < users.length; i++) {
      users[i].is_follow = false;
      for (let j = 0; j < follows.length; j++) {
        if (users[i]._id.toString() === follows[j]._id.toString()) {
          users[i].is_follow = true;
        }
      }
    }
    return users;
  })
}

module.exports = userService;
