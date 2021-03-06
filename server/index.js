const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// 导入mongoose配置
var mongoose = require('./db.js')
// 导入mongoose相关配置 和 model
var db = mongoose();

const resolve = file => path.resolve(__dirname, file)
const api = require('./api')
const app = express()

// const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

app.set('port', (process.env.port || 3000))
app.use(favicon(resolve('../src/assets/favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))
app.use(api)

// app.post('/api/login', function (req, res) {
  // new db.User(req.body)
  //   .save()
  //   .then(() => {
  //     res.status(200).end()
  //     db.initialized = true
  //   })
  //   .catch(() => res.status(500).end())
// })

app.get('*', function (req, res) {
  const fileName = db.initialized ? 'index.html' : 'index.html'
  // const fileName = db.initialized ? 'index.html' : 'setup.html'
  const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
  res.send(html)
})

app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
