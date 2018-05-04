const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
var router = express.Router();
var request = require('request');
app.use(express)
app.use(cors)

app.listen(3000, () => {
console.log("app is runni")
})
