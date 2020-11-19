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
      callback(dirPath.split('/').slice(1).join('/'));
    }
  });
}

walkDir('dist/books', (filePath) => {
  if (books[filePath.split('/')[1]] === undefined) {
    books[filePath.split('/')[1]] = [];
  }
  books[filePath.split('/')[1]].push(filePath);
});

fs.writeFileSync('src/books.json', JSON.stringify(books, null, '  '));
