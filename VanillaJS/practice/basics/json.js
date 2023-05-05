// important JSON methods

// CONVERT - STRING TO OBJECT
JSON.parse(string); // syntax - string should be a valid convertible JS object
console.log(JSON.parse('{"name":"preeti"}')); // example

// CONVERT - OBJECT TO STRING
JSON.stringify(object); // syntax - object to string
console.log(JSON.stringify({ name: "preeti" })); // example
