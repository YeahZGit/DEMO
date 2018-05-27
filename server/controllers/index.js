const router = require('express').Router();
const HttpError = require('some-http-error');
const multer = require('multer');
const memberRequired = require('../middlewares/auth').memberRequired;
const adminRequired = require('../middlewares/auth').adminRequired;

const themeController = require('./theme');
const dynamicsController = require('./dynamics');
const userController = require('./user');
const uploadController = require('./upload');
const searchController = require('./search');

router.route('/theme')
  .post(themeController.addTheme)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/theme/:themeId')
  .put(themeController.updateThemeById)
  .delete(themeController.removeThemeById)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/theme/level/:level')
  .get(themeController.getThemeByLevel)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/users')
  .post(userController.addUser)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/users/authorize')
  .post(userController.authorize)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

  router.route('/users/:userId')
  .put(userController.updateUserById)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/users/:userId/fans')
  .get(userController.getAllFansByUserId)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/users/:userId/fans/:fansId')
  .put(userController.removeFans)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/users/:userId/follows')
  .get(userController.getAllFollowsByUserId)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/users/:userId/add-follow/:followId')
  .put(userController.addFollow)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/users/:userId/remove-follow/:followId')
  .put(userController.removeFollow)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/dynamics')
  .post(dynamicsController.addDynamics)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/dynamics/recommend')
  .get(dynamicsController.getRecommendDynamics)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/dynamics/:dynamicsId')
  .put(dynamicsController.updateDynamicsById)
  .delete(dynamicsController.removeDynamicsById)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/dynamics/self/:userId')
  .get(dynamicsController.getSelfDynamicsByUserId)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

// 获取关注动态
router.route('/dynamics/follow/:userId')
  .get(dynamicsController.getDynamicsByUserId)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/search')
  .post(searchController.search)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/uploads/pictures')
  .post(multer({ storage: multer.diskStorage(uploadController.storagePicture) }).single('picture'),
    uploadController.handleResult)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

module.exports = router;