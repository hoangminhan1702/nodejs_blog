const path = require('path');

const express = require('express')
const morgan = require('morgan')
const  handlebars  = require('express-handlebars');
const { Console } = require('console');
const app = express()
const port = 3000
//trỏ đến file static
app.use(express.static(path.join(__dirname,'public')))
//http logger
app.use(morgan('combined'))
//template handlebars
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));


app.get('/an', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})