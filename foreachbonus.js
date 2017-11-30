//Understanding the forEach loop.
//directions: Use forEach loops to solve the following problems.


//Question 1
//Write a forEach loop that prints out each name
console.log("QUESTION 1");

var names = ["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"];

names.forEach(function(person){
  console.log(person);
});

//Question 2
//Using the above names array, write a forEach loop that
//creates a NEW array with capitalized names
console.log("QUESTION 2");

var capitalizedNames = names.map(function(person){
  return person.toUpperCase();
});

console.log(capitalizedNames);


//Question 3
//Using the above names, write a forEach loop that counts the total
//amount of letters in all the names combined
//(e.g., "Bob" is 3 letters, + "Sally" with 5 letters + ... and so on)
console.log("QUESTION 3");

var totalNumberOfLetters = 0;

names.forEach(function(a){
  return totalNumberOfLetters += a.length;
});

console.log("Total letters: " + totalNumberOfLetters);

// var checkLength = function(name){
//   return name.length;
// };
// var totalSum = names.reduce(checkLength(name));
// console.log("Total letters:", totalSum);

var sumLetters = names.reduce(function(name1,name2){
  if (typeof name1 === "string"){
    return name1.length + name2.length;
  }else{
    return name1 + name2.length;
  }
});
console.log("Reduce total:", sumLetters);

var total = 0;
names.reduce(function(a,b){
    total+=b.length;
});
console.log("Reduce2 total:", total);

//Question 4
//An array of book objects is defined below.
//Use a forEach loop to print out the title of each book.
console.log("QUESTION 4");

var books = [
  { title: "Stranger in a Strange Land", author: "Robert Heinlein"},
  { title: "The Moon is a Harsh Mistress", author: "Robert Heinlein"},
  { title: "Childhood's End", author: "Arthur C. Clarke"},
  { title: "Slaughterhouse 5", author: "Kurt Vonnegut"},
  { title: "Cat's Cradle", author: "Kurt Vonnegut"},
  { title: "Breakfast of Champions", author: "Kurt Vonnegut"},
  { title: "A Scanner Darkly", author: "Phillip K. Dick"},
  { title: "Do Androids Dream of Electric Sheep", author: "Phillip K. Dick"}
];

books.forEach(function(book){
  console.log(book.title);
});

//Question 5
//Using the above books array, write a forEach loop that counts
//how many books are written by Kurt Vonnegut
console.log("QUESTION 5");

var totalBooksByKV = 0;

books.forEach(function(book){
  if(book.author === "Kurt Vonnegut"){
    return totalBooksByKV ++;
  }
});

console.log("Total books by Kurt Vonnegut: " + totalBooksByKV);

//Question 6
//Take the logic you came up with in question 5 and genericize it
//into a function that accepts author and the books array as parameters.
//(Implement the following)
console.log("QUESTION 6");

function findAuthorsBookCount(allBooks, authorName){
  var totalByAuthor = 0;
  allBooks.forEach(function(book){
    if(book.author === authorName){
      totalByAuthor ++;
    }
  });
  return totalByAuthor;
}

var author1 = "Kurt Vonnegut";
var author2 = "Robert Heinlein";
var author3 = "Arthur C. Clarke";

console.log("I have " + findAuthorsBookCount(books, author1) + " books by " + author1 + " in my library.");
console.log("I have " + findAuthorsBookCount(books, author2) + " books by " + author2 + " in my library.");
console.log("I have " + findAuthorsBookCount(books, author3) + " books by " + author3 + " in my library.");