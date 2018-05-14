const jwt = require('../common/jwt');
const HttpError = require('some-http-error');
const auth = {};

auth.authorization = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const auth = req.auth = { isAuth: false, message: '用户未登录' };
  if (!authHeader) {
    return next();
  }

  const token = authHeader.split(' ')[1];
  if (authHeader.split(' ')[0] != 'Bearer' || !token) {
    auth.message = '验证信息格式错误';
    return next();
  }
  jwt.verify(token).then(obj => {
    auth.isAuth = true;
    delete auth.message;
    if (auth.isAdmin = obj.user_type === 'admin') {
      auth.username = obj.username;
      auth._id = obj.id;
    }
    if (auth.isMember = obj.user_type === 'member') {
      auth.username = obj.username;
      auth._id = obj.id;
    }
    next();
  }).catch(err => {
    Object.assign(auth, err);
    return next();
  });
}
auth.adminRequired = (req, res, next) => {
  if (!req.auth.isAuth) {
    next(new HttpError.UnauthorizedError(req.auth.message || '用户未登录'));
  } else if (!req.auth.isAdmin) {
    next(new HttpError.ForbiddenError('拒绝访问'));
  } else {
    next();
  }
};

auth.memberRequired = (req, res, next) => {
  if (!req.auth.isAuth) {
    next(new HttpError.UnauthorizedError(req.auth.message || '用户未登录'));
  } else {
    next();
  }
};


module.exports = auth;