const express = require('express')
const router = require('./routes')
const morgan = require('morgan')


const app = express()
const PORT = 4000

app.set('view engine', 'ejs')
app.use(morgan(':method :url :status :res[content-length] - :response-time ms '))
app.use(express.static('public'))

app.use('/', router)

app.get('/', (req, res) => {
  res.send('test')
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
