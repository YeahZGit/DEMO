const HttpError = require('some-http-error');
const Theme = require('../models').Theme;
const themeController = {};

themeController.addTheme = (req, res, next) => {
  const body = Object.assign(new Theme(), req.body);
  Theme.addTheme(body).then(theme => {
    res.success(theme);
  }).catch(next);
}

themeController.getThemeByLevel = (req, res, next) => {
  const level = req.params.level;
  Theme.getThemeByLevel(level).then(themes => {
    res.success(themes);
  }).catch(next);
}

themeController.removeThemeById = (req, res, next) => {
  const themeId = req.params.themeId;
  Theme.removeThemeById(themeId).then(() => {
    res.success(null, 204);
  }).catch(next);
}

themeController.updateThemeById = (req, res, next) => {
  const themeId = req.params.themeId;
  const body = Object.assign(new Theme(), req.body);
  Theme.updateThemeById(themeId, req.body).then(theme => {
    return Theme.findThemeById(theme._id);
  }).then(theme => {
    res.success(theme);
  }).catch(next);
}

module.exports = themeController;