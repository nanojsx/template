import fetch from 'node-fetch'
import compression from 'compression'
import Nano, { Helmet } from 'nano-jsx'

import { makeHtml } from './makeHtml'

import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'

// express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// compression
app.use(compression())

app.get('/', async (req: any, res: any) => {
  /**
   * You could fetch some data here and pass the result to your component.
   *
   * const data = await fetch('website.com/api/posts/1234')
   * <Component post={data.post} />
   */

  // render the app
  const ssr = Nano.renderSSR(<HomePage path={req.path} />)

  // extract body, head, and footer
  const { body, head, footer } = Helmet.SSR(ssr)

  // make and send the html
  res.send(makeHtml(body, head, footer))
})

app.get('/about', async (req: any, res: any) => {
  // render the app
  const ssr = Nano.renderSSR(<AboutPage path={req.path} />)

  // extract body, head, and footer
  const { body, head, footer } = Helmet.SSR(ssr)

  // make and send the html
  res.send(makeHtml(body, head, footer))
})

// serve service worker file
app.get('/sw.js', (req: any, res: any) => {
  res.sendFile(__dirname + '/public/sw.js')
})

// serve manifest.webmanifest file
app.get('/manifest.webmanifest', (req: any, res: any) => {
  res.sendFile(__dirname + '/public/manifest.webmanifest')
})

// serve public directory as a static folder
app.use('/public', express.static('./dist/public')) // , { maxAge: 60 * 60 * 1000 }))

// start the server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
