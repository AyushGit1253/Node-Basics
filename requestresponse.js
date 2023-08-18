const http= require('http')
const server=http.createServer((req,res)=>{

    console.log('server started')
    const url=req.url
    let output=' '
    if(url==='/home'){
        output='welcome home'
    }
    else if(url==='/about'){
        output='welcome to about us page'
    }
    
    else if(url==='/node'){
        output='welcome to node js project'
    }
    else{
        output='404-page not found'
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(output)
    
})
server.listen(4000)
