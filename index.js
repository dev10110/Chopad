console.log('Hello, World! Node is working...');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');




// ************ ROUTES **************
// getting the homepage
// // set the view engine to ejs

// index page
app.get('/', function(req, res) {
    res.render('index');
});

//app.get('/', (req, res) => {
//  res.render('pages/index');
//});

app.get('/about', (req, res) => { // new
  res.send('about');
});


// ************** START LISTENING ************
// start listening
app.listen(3000, () => console.log('listening on port 3000'));
