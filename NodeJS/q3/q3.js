const request = require("request");
const fs = require("fs");

request("http://www.google.com", function (error, response, body) {
  console.error("error 1:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  fs.writeFileSync(`${__dirname}/output.html`, body);
});

request(
  "https://cdn.fileinfo.com/img/ss/lg/jpg_44.jpg",
  function (error, response, body) {
    console.error("error 2:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  }
).pipe(fs.createWriteStream("BeachImg.png"));
