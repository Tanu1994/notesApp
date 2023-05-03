const fs = require('fs');
const book = {
    autor: "J.K.Rowling",
    titlu: "Harry Potter"
};

const bookJSON = JSON.stringify(book);
// console.log(book);
// console.log(bookJSON);
fs.writeFileSync('stocare.json', bookJSON);

const dataBuffer = fs.readFileSync('stocare.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);