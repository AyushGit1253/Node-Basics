

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Ayush</h1>');
    console.log('My name is ChatGPT.');
    res.end()
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
