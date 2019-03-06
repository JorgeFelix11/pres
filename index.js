const express = require('express');
const hbs = require('hbs');

let app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname +'/public'))
hbs.registerPartials(__dirname+'/views/partials')
app.get('/', function(req, res) {
    res.render('home.hbs');
  });

  app.get('/about', (req,res) => {
      res.render('about.hbs')
  })

  app.get('/user/:name', (req,res) => {
    res.render('user.hbs', {
        name: req.params.name
    })
  })
app.listen(3000, () => console.log("Listening to port 3000"))