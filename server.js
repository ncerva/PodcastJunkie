const path = require('path');

const express = require('express');

const session = require('express-session');

const exphbs = require('express-handlebars');

const routes = require('./controllers');

const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({helpers}); //to add helpers to object

const sess = {
  secret: process.env.MY_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//comment for heroku

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});


//heroku c
