// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:
let count = 0;
class Book{
  
  //   Properties:
  //       title (string)
  //       author (string)
  //       pages (number)
  //       isAvailable (boolean, default: true)

  title;
  author;
  pages;
  isAvailable = true;

  constructor (title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (this.pages>300){
      count+=1
    }
  }

  //   Methods:
  //       borrow() - Marks the book as not available
  //       returnBook() - Marks the book as available
  //       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
  //       isLongBook() - Returns true if pages > 300, false otherwise
  borrow(){
    this.isAvailable = false;
    console.log(this.isAvailable);
  }
  returnBook(){
    this.isAvailable = true;
    console.log(this.isAvailable);
  }
  getInfo(){
     console.log(` ${this.title} (${this.author})`);
  }
  isLongBook(){
    if(this.pages>300){
      return true;
    }
    else{
      return false;
    }
  }
}

//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


let book1 = new Book("Harry Potter", " J.K. Rowling ", 1984);
let book2 = new Book("Draupadi", "Kiran", 200);
let book3 = new Book("A Tale of Two Cities", "Dickens", 400);
let book4 = new Book("The Lord of the Rings", "Tolkien", 1400);
let book5 = new Book("The Pilgrim's Progress ", "John Bunyan", 500);

//   2. Perform the following operations:

//       i. Display info of all books
book1.getInfo()
book2.getInfo()
book3.getInfo()
book4.getInfo()
book5.getInfo()

//       ii. Borrow 2 books and show their availability status
book1.borrow()
book2.borrow()

//       iii. Return 1 book and show updated status
book2.returnBook()

//       iv. Count how many books are "long books" (more than 300 pages)
console.log(count)

//       v. List all available books




