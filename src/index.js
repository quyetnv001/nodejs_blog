const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3003;

//http logger
app.use(morgan('combined'));

//  Template engine
app.engine('hbs', handlebars.engine({
   extname:'.hbs'
}))
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'resources/views'))

// get and rander
app.get('/', (req, res) => {
  // return res.render('home')
  res.render('home', {layout: 'main.hbs'});
});

app.listen(port, () => console.log(`example ${port} is running nhe `));
