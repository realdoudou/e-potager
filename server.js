let express = require('express')
let open = require('open')
let port = 3000
let urlToLaunch = "http://localhost:3000/popo.html"
open(urlToLaunch)


let app = express()
app.use('/', express.static(__dirname))
app.listen(port, function () {
	console.log('listening on '+urlToLaunch)
})
