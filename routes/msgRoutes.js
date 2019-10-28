'use strict';
module.exports = function(app) {
var messages = require('../controllers/msgController');

const UserContoller = require ('../controllers/UserController');
const DataController = require ('../controllers/DataController');
const ConclusionController = require ('../controllers/ConclusionController');


//APLICAR const express = require('express'); CASO FOR UTILIZAR O Router()

//const routes = express.Router();

/*
routes.post('/user', UserContoller.store);
routes.post('/data', DataController.store);

routes.get('/data', DataController.index);
*/

app.route('/data')
   .post(DataController.store)
   .get(DataController.index);

app.route('/user')
   .post(UserContoller.store)   
   .get(UserContoller.index);



app.route('/conclusion')
   .get(ConclusionController.show);

   

// messages Routes
app.route('/messages')
   .get(messages.list_all_messages)
   .post(messages.create_a_message);
app.route('/messages/:msgId')
   .get(messages.read_a_message)
   .put(messages.update_a_message)
   .delete(messages.delete_a_message);



};