const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

//Mongo DBConfig (DatabaseConfig)
const db = require('./config/keys').mongoURI;
//Connec to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



// Express body parser
app.use(express.urlencoded({ extended: false }));
//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');



//ROUTES
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log('Server started on port ${PORT}'));