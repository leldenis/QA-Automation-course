import Book from "./Book.js";
import EBook from "./EBook.js";

const book1 = new Book("Denys life", "Denys", 1998);
const book2 = new Book("Game", "Some author", 1997);
const ebook1 = new EBook("Duna", "Frenk", 1977, "epub");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

book1.year = 2023;
console.log(`New creat years from book "Denys life" change to: ${book1.year}`);

const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log("Oldest book:");
oldestBook.printInfo();

const newEbook = EBook.createEBookFromBook(book1, "pdf");
newEbook.printInfo();

try {
  book1.year = "wrong year";
} catch (e) {
  console.log(e.message);
}