const express = require("express")
const app = express()
const port = 3000
const path = require("path")

app.use(express.static(__dirname))

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" })

  res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(port, () => console.log(`App started on port ${port}`))
