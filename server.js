const express = require('express');
// const path = require('path');
const mongoose = require('mongoose');

const routes = require('./routes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
  app.use('/', htmlRoutes);
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness_tracker_db', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

app.listen(PORT);
