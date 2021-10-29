var http = require('http'); // Import Node.js core module
const https = require('https');
var aa='aa';

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        https.get('https://hebcal.com/shabbat?cfg=json&city=Jerusalem', (resp) => {
            let data = '';

  // A chunk of data has been received.
             resp.on('data', (chunk) => {
               data += chunk;
   // console.log(data);
  });

  // The whole response has been received. Print out the result.
                resp.on('end', () => {
   // console.log(data);
            var obj = JSON.parse(data);
                console.log('dddd1   '+obj.items[0].title);
                console.log('dddd3   '+obj.items[0].memo);
                 aa= obj.items[0].memo +'  <br> ' + obj.items[0].title +' <br>  ' + obj.items[1].title + ' <br>  ' + obj.items[3].title;
                            });

                }).on("error", (err) => {
  console.log("Error: " + err.message);
            });

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.');
        res.write('<br>');
        res.write('gggggg' +aa );
        res.write('</p></body></html>');



        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')