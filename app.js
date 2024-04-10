const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const urlShortRouter = require('./routes/urlShort');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/l', urlShortRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`listening on port: ${port}...`)
})

module.exports = app;
