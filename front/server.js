const fs = require('fs');
const exec = require('child_process').exec;

//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  let error = false;
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  
  if (req.url === '/')
  	res.end(fs.readFileSync('index.html'));
  else {
	if (req.url.slice(-3) === 'css')
		res.setHeader("Content-Type", "text/css");
	else if (req.url.slice(-3) === 'svg')
		res.setHeader("Content-Type", "image/svg+xml");
	else if (req.url.slice(-3) === 'png')
		res.setHeader("Content-Type", "image/png");
	const fileName = req.url.slice(1);
	fs.access(fileName, function(err) {
		if (err) {
			res.statusCode = 404;
			res.end();
		}
		else
			res.end(fs.readFileSync(fileName))
	})
  }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.warn(`This server is only thought to ensure the build process went well, do not use it for developpement in any case`);
});

if (process.platform === 'win32')
	exec(`explorer "http://${hostname}:${port}/"`);
else
	exec(`open "http://${hostname}:${port}/"`);