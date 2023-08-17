const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Ayush');
});

server.listen(4000, () => {
    console.log('Ayush');
});
