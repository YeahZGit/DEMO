const router = require('express').Router();
const HttpError = require('some-http-error');
const multer = require('multer');
const memberRequired = require('../middlewares/auth').memberRequired;
const adminRequired = require('../middlewares/auth').adminRequired;

const themeController = require('./theme');
const dynamicsController = require('./dynamics');
const userController = require('./user');

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

router.route('/users/:userId')
  .put(userController.updateUserById)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/users/authorization')
  .post(userController.authorize)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/dynamics')
  .post(dynamicsController.addDynamics)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/dynamics/dynamicsId')
  .put(dynamicsController.updateDynamicsById)
  .delete(dynamicsController.removeDynamicsById)
  .all(() => { throw new HttpError.MethodNotAllowedError() });

router.route('/dynamics/self/:userId')
  .get(dynamicsController.getSelfDynamicsByUserId)
  .all(() => { throw new HttpError.MethodNotAllowedError() });
  
module.exports = router;