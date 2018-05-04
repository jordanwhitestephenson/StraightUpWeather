const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var rootUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5ce5187ddbef19cc1c72ce490a99d786';
var apiUrl = '&appid=2de143494c0b295cca9337e1e96b00e0';

app.use(bodyParser.json())

app.get('api.openweathermap.org/data/2.5/weather?zip=:zipcode,us&APPID=5ce5187ddbef19cc1c72ce490a99d786', (req, res) => {
  const {zipcode} = req.params;
  console.log('zipcode')

})


app.listen(3000, ()=> {
  console.log("app is runni")
})
