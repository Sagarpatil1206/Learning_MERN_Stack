// //server gives accesss to "request and response" 

// const http=require("http");

// const server=http.createServer(function(req,res){//Returns a new instance of Server //(local function)(req: http.IncomingMessage, res: http.ServerResponse): void
//     res.writeHead(200,{"Content-Type":"text/html"})//Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.
//     res.end("Hello whole world from NodeJS \n wow it runs");//Calling the writable.end() method signals that no more data will be written to the Writable. The optional chunk and encoding arguments allow one final additional chunk of data to be written immediately before closing the stream.
// });

// server.listen(8000);//Start a server listening for connections
//type npm start after running in vs code
//write http://localhost:8000 in a web browser
//when you call the IP address 127.0.0.1 then you are communicating with the local host. Localhost is always your own computer. Your computer is talking to itself when you call the local host
//commented as to run expressServer