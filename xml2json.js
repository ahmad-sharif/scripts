var convert = require('xml-js');
var xml = require('fs').readFileSync('TEST-tests.DemoTest.xml', 'utf8');
var result = convert.xml2json(xml, {compact: false, spaces: 4});
console.log(result);
