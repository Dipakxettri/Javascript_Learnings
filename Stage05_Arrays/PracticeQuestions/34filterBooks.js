
let books = ["C", "C++", "Java","Python"];
let bookSearch = "c";

let filtred = books.filter(i => i.toLowerCase().includes(bookSearch.toLowerCase()));//filtred array

console.log(filtred);
