const http = require('http');
const users = require('./static.js');
const getData = require('./queries/getData');
const fs = require('fs');
const pg = require('pg');

const router = (request, response) => {
    const endpoint = request.url.split('/')[1];

    if (endpoint === '') {
        fs.readFile(__dirname + "/../public/index.html", function(error, file) {
            if (error) {
              response.writeHead(500, 'Content-Type:text/html');
              response.end('<h1>Sorry, there was a problem loading the homepage</h1>');
              console.log(error);
            } else {
              response.writeHead(200, {
                  "Content-Type": "text/html"
              });
                response.end(file);
            }
        });
    } else if (endpoint === "users") {
        // Replace the 3 lines below below with your own function that gets data from your database
        // const output = JSON.stringify(users);
        // response.writeHead(200, {
        //     "Content-Type": "application/json"
        // });
        // response.end(output);
        getData((err, dbresponse) => {
          if (err) {
            console.log('err', err);
            response.writeHead(500, {'content-type': 'text/html'});
            return response.end('<h1>Error 500: INTERNAL SERVER ERROR</h1>');
          }
          response.writeHead(200, {'content-type': 'application/json'});
          response.end(JSON.stringify(dbresponse));
        })
    } else {
      // import files from public/
        const fileName = request.url;
        const fileType = request.url.split(".")[1];
        fs.readFile(__dirname + "/../public" + fileName, function(error, file) {
            if (error) {
              response.writeHead(500, 'Content-Type:text/html');
              response.end('<h1>Sorry, there was a problem loading this page</h1>');
              console.log(error);
            } else {
              response.writeHead(200, {
                  "Content-Type": "text/" + fileType
              });
                response.end(file);
            }
        });
    }
};

module.exports = router;
