const http = require('node:http');

const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://localhost:3000').pathname;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (pathname === '/') {
    res.writeHead(200);
    res.end('<h1>Welcome to Greenfield College!</h1>');
  } else if (pathname === '/about') {
    res.writeHead(200);
    res.end('<h1>About Greenfield College</h1><p>Greenfield College provides quality education and helps students prepare for successful careers.</p>');
  } else if (pathname === '/courses') {
    res.writeHead(200);
    res.end(`
      <h1>Available Courses</h1>
      <ul>
        <li>Computer Science</li>
        <li>Business Administration</li>
        <li>Biology</li>
      </ul>
    `);
  } else if (pathname === '/students') {
    res.writeHead(200);
    res.end(`
      <h1>Sample Students</h1>
      <ul>
        <li>Aisha Khan — Computer Science</li>
        <li>Marco Lee — Biology</li>
        <li>Sofia Patel — Business Administration</li>
      </ul>
    `);
  } else {
    res.writeHead(404);
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('College server is running at http://localhost:3000');
});