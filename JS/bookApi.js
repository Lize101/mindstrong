const apiKey = 'AIzaSyAvqhN0ev7mUP5X549Dsdt6oQOsTiY4Pjo'; // Replace with your Google Books API Key
const searchQuery = 'self-help'; // Replace with your search query

const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const bookList = document.getElementById('book-list');
    data.items.forEach(item => {
      const book = item.volumeInfo;
      // Create list items and populate them with book details
      const listItem = document.createElement('li');
      const truncatedDescription = book.description ? (book.description.length > 100 ? book.description.substring(0, 100) + '...' : book.description) : 'N/A';
      const truncatedTitle = book.title ? (book.title.length > 60 ? book.title.substring(0, 60) + '...' : book.title) : 'N/A';

      listItem.innerHTML = `
        <h2>${truncatedTitle}</h2>
        ${book.imageLinks ? `<img src="${book.imageLinks.thumbnail}" alt="Book Cover">` : ''}
        <p>Author: ${book.authors ? book.authors.join(', ') : 'N/A'}</p>
        <p>Description: ${truncatedDescription}</p>
        <p>Published Date: ${book.publishedDate ? book.publishedDate : 'N/A'}</p>
        <p>Page Count: ${book.pageCount ? book.pageCount : 'N/A'}</p>
      `;
      // Populate the list item with book details (e.g., title, author).
      bookList.appendChild(listItem);
    });
        // After adding all list items, apply a grid layout
        bookList.classList.add('grid-list');
  })
  .catch(error => console.error('Error:', error));
