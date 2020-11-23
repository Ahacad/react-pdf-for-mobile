const fs = require('fs');
const path = require('path');

let books = {};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      fs.rename(dirPath, dirPath.replace(/ /gi, '-').replace(/[,\(\)]/gi, ''), (err) => {
        if (err) console.log(err);
      });
      callback(dirPath);
    }
  });
}

walkDir('dist/books', (filePath) => {
  if (books[filePath.split('/')[2]] === undefined) {
    books[filePath.split('/')[2]] = [];
  }
  books[filePath.split('/')[2]].push(filePath.split('/').slice(1).join('/'));
});

fs.writeFileSync('src/books.json', JSON.stringify(books, null, '  '));
