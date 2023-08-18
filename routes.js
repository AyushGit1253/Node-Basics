const fs=require('fs')
const requestHandler=(req, res)=>{
    const url=req.url
    const method=req.method
    console.log('server started')
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>WritingReadingFromFile</title></head>')
        res.write('<body>')

        const readmsg=fs.readFileSync('msg.txt','utf-8').split('\n')
        //after send button is clicked data is shown on page
        //first data goes to file for write after it gets redirected to '/' here we read from file
        for(const message of readmsg){
            if(message.trim()!=''){
            res.write(`<p>${message}</p>`)
            }
        }

        res.write('<form action="/message" method="POST"><input type="text" name="uname"><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()//if return not used then lower lines will get execute also after we end()
    }

    if(url==='/message'&& method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{//on() registers event..here data..when we click on send button this is an event
            console.log(chunk)
            body.push(chunk)//data we enter in input field goes in array
        })
      return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            console.log(parsedBody)
            const msg=parsedBody.split('=')[1]
            fs.writeFile('msg.txt',msg +'\n', (err)=>{
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end() 
            })
        })

    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>Hello</title></head>')
    res.write('<body><h1>Hello from node js</h1></body>')
    res.write('</html>')
    res.end()
}
//we clean code by seperating whole code in two files
//exported handler to app.js

//3 ways:
//module.exports=requestHandler

/* module.exports={
    handler:requestHandler,
    someText:'some text'
} */

module.exports.handler=requestHandler
module.exports.someText='some text'