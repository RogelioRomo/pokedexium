require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const handlebars = require('express-handlebars')
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')
const { connectDB } = require('./config/config.js')
const appRouter = require('./routes/index.js')
const path = require('path')

const app = express()
const PORT = 8080
const MONGO_URL = process.env.MONGO_URL
connectDB()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
  secret: 'secr3t0',
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: MONGO_URL })
}))

app.engine('handlebars', handlebars.engine())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))

app.use(appRouter)

app.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log(`Server listening in port ${PORT}`)
})
