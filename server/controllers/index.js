const router = require('express').Router();
const HttpError = require('some-http-error');
const multer = require('multer');
const memberRequired = require('../middlewares/auth').memberRequired;
const adminRequired = require('../middlewares/auth').adminRequired;

const themeController = require('./theme');
const dynamicsController = require('./dynamics');

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

module.exports = router;