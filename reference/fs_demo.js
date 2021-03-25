const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {} ,(err) => {
//     if(err) throw err;
//     console.log('folder created');
// });

// fs.writeFile(path.join(__dirname, '/test', 'heloo.txt'), 'heloo' ,(err) => {
//     if(err) throw err;
//     console.log('file writte');
// });


// fs.appendFile(path.join(__dirname, '/test', 'heloo.txt'), ' i love node js' ,(err) => {
//     if(err) throw err;
//     console.log('file writte');
// });

// fs.readFile(path.join(__dirname, '/test', 'heloo.txt'), 'utf8' ,(err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

fs.rename(path.join(__dirname, '/test', 'heloo.txt'), path.join(__dirname, '/test', 'heloo1.txt') ,(err) => {
    if(err) throw err;
    console.log('file changed');
});