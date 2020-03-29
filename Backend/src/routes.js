const express = require('express');
const routes = express.Router();
const OngsController = require('./controller/OngsController');
const Incidentscontroller = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.post('/incidents', Incidentscontroller.create);
routes.get('/incidents', Incidentscontroller.index);
routes.delete('/incidents/:id', Incidentscontroller.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;

