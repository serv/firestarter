var express = require('express');
var routes = express.Router();

var applicationController = require('../app/controllers/application_controller');
var pagesController = require('../app/controllers/pages_controller');
var verificationsController = require('../app/controllers/verifications_controller');

routes.get('/*', applicationController.index);

routes.get('/', pagesController.index);
routes.post('/pages/post_sign_up', pagesController.postSignUp);

routes.get('/verify/:trail', verificationsController.postVerify);

module.exports = routes;
