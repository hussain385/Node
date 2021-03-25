const url = require('url');
const Myurl = new URL('http://hussain-saifuddin.surge.sh:8000/hello.html?id=100&status=active');
// Serialized URL
console.log(Myurl.href);
console.log(Myurl.toString());

// Host (root domain)
console.log(Myurl.host);

// Hostname (does not get port)
console.log(Myurl.hostname);

// Pathname
console.log(Myurl.pathname);

//seriallized query
console.log(Myurl.search);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(Myurl.searchParams);

// Loop through params
Myurl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
