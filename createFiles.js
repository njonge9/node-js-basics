//fs has three methods for creating new files
/*
1.fs.append
2.fs.open()
3.fs.writeFile()
*/

//fs.append()
//appends specified content to a file.If the file does not exist, the file will be created
var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('saved!')
});

//fs.open()
//takes a 'flag' as the second argument, if the flag is 'w' for writing
//the specified file is opened for writing
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

//fs.writeFile()
//replaces the specified file and content if it exists
//if the file does not exist, a new file, containing the specified content , will be created

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!')
})