const express = require('express');
// const path = require('path');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(express.static('public'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('public'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'public/index.html'));
//   });
// }

mongoose.connect(process.env.MONGODB_URI || 'mongodb://user:password123@ds151076.mlab.com:51076/heroku_r334h2s4', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

app.listen(PORT);
