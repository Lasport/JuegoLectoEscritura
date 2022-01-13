const express = require('express');
const morgan = require('morgan');

// initialization
const app = express();

// setting
app.set('port', process.env.PORT || 4000);

//middelewares
app.use(morgan('dev'));

//global varibales


//routes


//public


//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
