
const fs = require('fs');
// const book = {
//     title: 'ego is enemy',
//     author: 'bob tabor'
// };

// const bookJson = JSON.stringify(book);

// console.log(bookJson);

// console.log((JSON.parse(bookJson)).title);

// fs.writeFileSync('1-json.json', bookJson);

// const databuffer = fs.readFileSync('1-json.json');
// const datajson = databuffer.toString();
// const data = JSON.parse(datajson);
// console.log(data.title);


const databuffer = fs.readFileSync('1-json.json');
const datajson = databuffer.toString();
const data = JSON.parse(datajson);

data.name = 'arif';
data.age = 39;

const andrewdata = JSON.stringify(data);
fs.writeFileSync('1-json.json', andrewdata);