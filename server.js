const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const db = mongoose.connection
const app = express();
const mongoURI = process.env.MONGO_URI 
const PORT = process.env.PORT || 3001
const Bills = require('./models/bills');
const billsData = require('./utilities/billsData')

//connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
)

// incase of Error/Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); 
app.use(express.static('public'))
app.use(cors())

//Routes
const billsController = require('./controllers/bills');
app.use('/bills', billsController);

//seed route
app.get('/seed', async (req, res) => {
    await Bills.deleteMany({});
    await Bills.insertMany(billsData);
    res.send('done!');
  });

//PORT  
app.listen(PORT, () => {
    console.log('Let\'s get things done on port', PORT)
  })