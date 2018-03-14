
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// view setup

app.set('views', path.join(__dirname, 'source/pug'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

// errors

app.use((req, res, next) => {
  let err = new Error('Not found');
  err.status = 404;
  next(err);
});
app.use('/:id', (err, req, res, next) => {
  let id = req.params.id;
  res.status(err.status || 500);
  res.render('error', {message: err.message, error: err, errDescription: 'Sorry. Page "' + id + '" is not exist.'});
});

// - - - - -

const server = app.listen(process.env.PORT || port, () => {
  console.log('Сервер запущен на порте: ' + server.address().port);
});
