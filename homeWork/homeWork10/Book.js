class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("The file format must be a string and cannot be empty.");
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("The file format must be a string and cannot be empty.");
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("The year must be a positive number.");
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Book name is: ${this._title} his author is ${this._author} and it was created at ${this._year}`);
  }

  static findOldestBook(books) {
    let oldestBook = books[0];
    for (const book of books) {
      if (book._year < oldestBook._year) {
        oldestBook = book;
      }
    }
    return oldestBook;
  }
}

export default Book;