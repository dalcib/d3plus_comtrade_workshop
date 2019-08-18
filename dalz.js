var repl = require("repl");
var context = repl.start("> ").context;

context.d3Array = require('d3-array')
context.d3Dsv = require('d3-dsv')

context.fs = require("fs");
context.readFile = function (file) {
  return context.fs.readFileSync(file, "utf8")
}
context.writeFile = function (fileName, data) {
  context.fs.writeFileSync(fileName, data)
  console.log(fileName+' write')
}

console.log('dalz')