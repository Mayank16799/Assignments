const XMLtoJSON = require("./wrapper.js");

//Some random XML
var xml_input = `<root>
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

console.log(XMLtoJSON.stringXMLtoJSON(xml_input));
console.log(XMLtoJSON.pathXMLtoJSON(`${__dirname}/q1.xml`));
