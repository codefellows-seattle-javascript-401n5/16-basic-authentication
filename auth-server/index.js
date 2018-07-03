'use strict';

require('dotenv').config();

require('babel-register');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
    //.then(n => console.log)
    //.catch(err => console.log);

require('./src/app.js').start(process.env.PORT);