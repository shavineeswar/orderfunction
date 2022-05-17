const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const orderApi = require('./src/api/order.api')

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8089;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

app.use('/order',orderApi());

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success");
})

app.route('/').get((req, res) => {
    res.send('Hello SLIIT from Docker');
});

app.listen(PORT, () => {
    console.log('Server is up and running on port number:' + PORT)
});
