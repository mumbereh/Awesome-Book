import Book from './book.js';

export default class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook(title, author) {
    const book = new Book(title, author);

    this.books.push(book);
    this.saveToLocalStorage();
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    this.saveToLocalStorage();
  }

  displayBooks() {
    const bookList = document.getElementById('book-lists');
    bookList.innerHTML = '';

    this.books.forEach((book) => {
      const listItem = document.createElement('li');
      listItem.style.listStyle = 'none';
      listItem.classList.add('list-item');

      const rmvBtn = document.createElement('button');
      rmvBtn.textContent = 'Remove';
      rmvBtn.classList.add('remove-button');
      rmvBtn.dataset.title = book.title;

      listItem.innerHTML = `"${book.title}" by ${book.author}`;

      bookList.appendChild(listItem);
      listItem.appendChild(rmvBtn);
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
