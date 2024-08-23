const { createServer } = require('node:http');
const { readFile } = require('node:fs');

const server = createServer((request, response) => {
  const pathname = request.url;
  const method = request.method;

  console.log(method);

  // root Route
  if (pathname === '/' || (pathname === '/home' && method === 'GET')) {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write('<h1>Root Route</h1>');
    response.end();

    // /about Route
  } else if (pathname === '/login' && method === 'GET') {
    readFile('./login.html', 'utf-8', (err, html) => {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });

      response.write(html);
      response.end();
    });
  } else if (pathname === '/about' && method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write('<h1>About Route</h1>');
    response.end();

    // 404: Not-Found
  } else {
    response.writeHead(404, {
      'Content-Type': 'text/html'
    });
    response.write('<h1 style="color: red">404: not found</h1>');
    response.end();
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.info('Listening on 127.0.0.1:8000 ...');
});
