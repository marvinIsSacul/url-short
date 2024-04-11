const express = require('express');
const mongoose = require('mongoose');
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

app.listen(port, (err) => {
    if (err) { console.error(err); }
    console.log(`listening on port: ${port}...`)
});

mongoose.connect('mongodb://localhost:27017', {
    user: 'root',
    pass: 'example',
})
    .then(() => {
        console.log('connected to DB...');
    })
    .catch((err) => {
        console.log('Could not connect to DB...');
        console.error(err);
    })

module.exports = app;
