const User = require('../models').User;

const userService  = {};

// 0未关注 1已关注 2自己
userService.addIsFollow = (userId, users) => {
  return User.findUserById(userId).then(user => {
    const follows = user.follow;
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id.toString() === userId) {
        users[i].is_follow = 2;
      }
      for (let j = 0; j < follows.length; j++) {
        if (users[i]._id.toString() === follows[j]._id.toString()) {
          users[i].is_follow = 1;
        }
      }
    }
    return users;
  })
}

module.exports = userService;
