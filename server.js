var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config.json'),
    profile = require('./controllers/profileCtrl'),
    user = require('./controllers/userCtrl')

var app = express();




var corsOptions = {
  origin: 'http://localhost:8001'
};


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}))

app.get('/api/profiles', profile.show);
app.get('/api/profiles/index', profile.index);

app.post('/api/login', user.login);

app.listen(8001, function() {
  console.log('Long live the King of the North!')
})
