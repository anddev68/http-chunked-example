import express from 'express'
import { setTimeout } from 'node:timers/promises';

const app = express()
const port = 3000

const html = `
<!doctype html>
<html>
  <head></head>
  <body>
    <div>first component</div>
`
const html2 = `
    <div>second component</div>
  </body>
</html>
`

app.get('/', async (req, res) => {
    res.set("Content-Type: text/html")
    res.set("Transfer-Encoding: chunked")
    res.write(html)

    await setTimeout(2000)

    res.write(html2)

    res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
