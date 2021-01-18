const fs = require("fs");
const handlebars = require("handlebars");

const source = fs.readFileSync(`${__dirname}/template.js`, "utf-8");
var template = handlebars.compile(source);
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

var result = template(data);
fs.writeFileSync(`${__dirname}/result.xml`, result, "utf-8");
console.log(result);
