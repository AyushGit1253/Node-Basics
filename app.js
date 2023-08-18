const http=require('http')
const route=require('./routes.js')//'./' used to find local files

//const server=http.createServer(route)
const server=http.createServer(route.handler)
console.log(route.someText)
server.listen(4000)