var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Message = require('./models/msgModel'),
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
/*mongoose.connect('mongodb://localhost/msgdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});*/

mongoose.connect('mongodb://heroku_j64vqwzj:jgu8n9njnsqfnqnmmgpgaccfhq@ds241097.mlab.com:41097/heroku_j64vqwzj',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routes/msgRoutes');
routes(app);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);