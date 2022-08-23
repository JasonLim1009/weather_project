// 244
// const express = require('express');
// const https = require('https');
// const app = express();

// app.get('/', function(req, res){
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=johor&appid=79b888d2b147d0f96b2ca714cad2d847&units=metric';
//     https.get(url, function(response){
//         console.log(response.statusCode);
        
//         response.on('data', function(data){
//             const weatherData = JSON.parse(data)
//             console.log(weatherData);
//         })
//     })
//     res.send('server is up and running')
// });

// app.listen(3000, function(){
//     console.log('server is running on port 3000');
// });

//npm init
//npm i express
//nodemon app.js
// **JSON.parse(data)



// const express = require('express');
// const https = require('https');
// const app = express();

// app.get('/', function(req, res){
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=johor&appid=79b888d2b147d0f96b2ca714cad2d847&units=metric';
//     https.get(url, function(response){
//         console.log(response.statusCode);
        
//         response.on('data', function(data){
//             const weatherData = JSON.parse(data)
//             const object = {
//                 name: 'JASON',
//                 favouriteFood: 'Ramen'
//             }
//             console.log(JSON.stringify(object));
//         })
//     })
//     res.send('server is up and running')
// });

// app.listen(3000, function(){
//     console.log('server is running on port 3000');
// });

//npm init
//npm i express
//nodemon app.js
// **JSON.stringify(object)



// const express = require('express');
// const https = require('https');
// const app = express();

// app.get('/', function(req, res){
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=johor&appid=79b888d2b147d0f96b2ca714cad2d847&units=metric';
//     https.get(url, function(response){
//         console.log(response.statusCode);
        
//         response.on('data', function(data){
//             const weatherData = JSON.parse(data)
//             const temp = weatherData.main.temp
//             const weatherDescription = weatherData.weather[0].description
//             console.log(weatherDescription);
//         })
//     })
//     res.send('server is up and running')
// });

// app.listen(3000, function(){
//     console.log('server is running on port 3000');
// });

//npm init
//npm i express
//nodemon app.js
// **api.openweathermap.org/data/2.5/weather?q=johor&appid=79b888d2b147d0f96b2ca714cad2d847&units=metric
// **weatherData.main.temp


// 245
// const express = require('express');
// const https = require('https');
// const app = express();

// app.get('/', function(req, res){
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q=johor&appid=79b888d2b147d0f96b2ca714cad2d847&units=metric';
//     https.get(url, function(response){
//         console.log(response.statusCode);
        
//         response.on('data', function(data){
//             const weatherData = JSON.parse(data)
//             const temp = weatherData.main.temp
//             const weatherDescription = weatherData.weather[0].description
//             const icon = weatherData.weather[0].icon
//             const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
//             res.write('<p>The weather is currently ' + weatherDescription + '</p>');
//             res.write('<h1>The temperature in JB is ' + temp + 'degree Celcius.</h1>');
//             res.write('<img src=' + imageURL +'>');
//             res.send()
//         })
//     })
// });

// app.listen(3000, function(){
//     console.log('server is running on port 3000');
// });

//npm init
//npm i express
//nodemon app.js
// **api.openweathermap.org/data/2.5/weather?q=johor&appid=79b888d2b147d0f96b2ca714cad2d847&units=metric
// **weatherData.main.temp
// openweathermap.org/img/wn/10d@2x.png
// write && send



// 246
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    const query = req.body.cityName;
    const apiKey = '79b888d2b147d0f96b2ca714cad2d847';
    const unit = 'metric';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=' + unit ;
    https.get(url, function(response){
        console.log(response.statusCode);
        
        response.on('data', function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
            res.write('<p>The weather is currently ' + weatherDescription + '</p>');
            res.write('<h1>The temperature in ' + query +' is ' + temp + 'degree Celcius.</h1>');
            res.write('<img src=' + imageURL +'>');
            res.send()
        })
    })
});



app.listen(3000, function(){
    console.log('server is running on port 3000');
});

//npm i body-parser
//nodemon app.js
