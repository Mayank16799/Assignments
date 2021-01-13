var parser = require('xml2json');
var fs = require('fs');

//Some random XML 
var xml_input =   `<root>
                <jar journey="recognize">-1836372714</jar>
                <halfway>after</halfway>
                <line>
                    <course>-1035572740</course>
                    <some>-388409883</some>
                    <freedom>-1547949543</freedom>
                    <where>
                        <slight affect="grain">-1813198206.0775776</slight>
                        <steam clay="hot">herself</steam>
                        <needle>fuel</needle>
                        <upon>current</upon>
                        <missing stopped="bat">able</missing>
                    </where>
                    <design special="sometime">2143599764.0417886</design>
                </line>
                <find twelve="dawn">1136748269.3269196</find>
                <movie>fifteen</movie>
            </root>`;

// xml as a String
console.log("input -> %s", xml_input);

// xml to json
var json = parser.toJson(xml_input);
console.log("to json -> %s", json);
 
// json to xml
var xml_output = parser.toXml(json);
console.log("back to xml -> %s", xml_output);




//XML as a file input
try{
    var xml_file_input = fs.readFileSync('q1.xml', 'utf8');
    console.log("input -> %s", xml_file_input);

    // xml to json
    var json_file = parser.toJson(xml_file_input);
    console.log("to json -> %s", json_file);
     
    // json to xml
    var xml_file_output = parser.toXml(json_file);
    console.log("back to xml -> %s", xml_file_output);
}catch(error){
    console.log(`${error}`);
}


 
