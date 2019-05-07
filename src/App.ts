import * as express from 'express'
import * as Utilities from './libs/Utilities'
import * as Interface from "./routes/Interface"

var bodyParser = require('body-parser')
var cors = require('cors')

class App {
  public express

  constructor () {
    const app = this
    app.express = express()
    app.express.use(express.static('public'))
    app.express.use(bodyParser.json())
    app.express.use(bodyParser.urlencoded({extended: true}))
    app.express.use(cors())
    
    app.express.get('/',Interface.rendervue)
  }
}

export default new App().express
