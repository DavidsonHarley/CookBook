require('dotenv').config();
require('@babel/register');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const { PORT, DATABASE_URL, SESSION_SECRET} = process.env;
const { sequelize } = require('../db/models');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

const homeRouter = require('./routes/homeRoute');
const registerRouter = require('./routes/registerRoute');
const loginRouter = require('./routes/loginRoute');

const receptInfo = require('./routes/receptInfoRoute')
const favoritesRouter = require('./routes/favoritesRouter');
const favoriteAdd = require('./routes/favoriteAdd')


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'flashCookie',
  store: new FileStore(),
  secret: SESSION_SECRET ?? 'flash',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use('/', homeRouter);
app.use('/registration', registerRouter);
app.use('/login', loginRouter);

app.use('/recept', receptInfo)
app.use('/favorites', favoritesRouter);
app.use('/favoriteAdd', favoriteAdd);



app.get('/logout', (req, res) => {
  if (req.session.newUser) {
    req.session.destroy(() => {
      res.clearCookie('flashCookie');
      res.redirect('/');
    });
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, async() => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена! :)');
  } catch (error) {
    console.error('База данных не подключена:', error.message);
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
