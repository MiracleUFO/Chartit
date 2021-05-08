const express = require('express');
require('dotenv').config();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  res.header('Access-Control-Origin', '*');
  res.header('Access-Control-Headers', '*');
  next();
});

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


//Connecting to MongoDB
const db = app.get('env') == "production" ? process.env.MONGODB_URI : config.mongoURI[app.settings.env];
mongoose.connect(
  db,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log('Mongodb connected'))
.catch((err) => console.log('Error connecting to Mongodb', err));
mongoose.set('useCreateIndex', true);
process.on('exit', () => {
  mongoose.connection.close();
})


// Routes
const authRoute = require('./routes/authRoute');
app.use('/api/auth', authRoute);

app.listen(port, () => {
 console.log(`Listening on port ${port}`)
});

module.exports = app;