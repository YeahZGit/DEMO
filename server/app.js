const configs = require('./configs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const controllers = require('./controllers');
const app = express();

app.use(middlewares.response);
app.use(bodyParser.json());
app.use(middlewares.authorization);
app.use(middlewares.queryHandling);
app.use(controllers);
app.use(middlewares.errorHandling);
app.use(express.static(path.join(__dirname, '/uploads')));

app.listen(configs.port, function () {
  console.log('server start on localhost', configs.port);
});