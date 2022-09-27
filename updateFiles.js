//fs has 3 methods for updating files
/*
1.fs.appendFile()
2.fs.writeFile()
*/

//fs.appendFile()
//appends the specified content at the end of the specified file:


var fs = require('fs');

fs.appendFile('mynewfile.txt', 'This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!')
})