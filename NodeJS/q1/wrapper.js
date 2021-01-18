var parser = require("xml2json");
var fs = require("fs");

exports.stringXMLtoJSON = (xml_input) => {
  // xml as a String
  console.log("input -> %s", xml_input);

  // xml to json
  var json = parser.toJson(xml_input);
  console.log("to json -> %s", json);

  // json to xml
  var xml_output = parser.toXml(json);
  console.log("back to xml -> %s", xml_output);
  return xml_output;
};

exports.pathXMLtoJSON = (XML_file_path) => {
  console.log("Buffalo " + XML_file_path);
  try {
    //XML as a file input
    var xml_file_input = fs.readFileSync(XML_file_path, "utf8");
    console.log("input -> %s", xml_file_input);

    // xml to json
    var json_file = parser.toJson(xml_file_input);
    console.log("to json -> %s", json_file);

    // json to xml
    var xml_file_output = parser.toXml(json_file);
    console.log("back to xml -> %s", xml_file_output);
  } catch (error) {
    console.log(`${error}`);
  }

  return xml_file_output;
};
