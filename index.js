const snakeNames = require("snake-names")
                
let namePicked = snakeNames.random()
                
console.log("You should name this snake:", namePicked)
                
let femaleSnakeNames = snakeNames.female
                
let randomIndex = Math.floor(Math.random() * femaleSnakeNames.length)
                
console.log("A great female snake name is: ", femaleSnakeNames[randomIndex])

let http = require('http')
let server = http.createServer(function (req, res) {
  //res.write("<h1 style='color: blue'>Hello FSD!</h1>")
  res.writeHeader(206)
  res.write(`<h1>Bark!</h1><img src="https://httpstatusdogs.com/img/206.jpg" alt="206">`)
  res.end()
})

server.listen(3000, function () {
  console.log('I am awake!')
})
