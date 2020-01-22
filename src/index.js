require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
require('./config/database');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes'));

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), () => {
    console.log('Server on port ', app.get('PORT'));
})