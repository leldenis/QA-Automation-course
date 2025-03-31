import Book from "./Book.js";

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("The file format must be a string and cannot be empty.");
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(`Book name is: ${this._title} his author is ${this._author} and it was created at ${this._year}, ${this._fileFormat}`);
  }

  static createEBookFromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

export default EBook;