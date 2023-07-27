let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
    return
}

function displayBookAsCard(book) {
    let newCard = document.createElement("div");
    
    newCard.classList.add("card");
    newCard.innerHTML = `
    <div class="card-buttons-wrapper">
        <button class="read-button" id="read"></button>
    </div>
    <div class="card-info-container">
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages} pages</p>
    </div>
    <div class="card-buttons-wrapper">
        <button class="delete-button"><img src="images/delete.svg" alt="delete" height="25px"></button>
    </div>`
    document.querySelector(".grid-container").appendChild(newCard)
}

let book1 = new Book ("Hobbit", "R.R.Tolkien", 600, false);
let book2 = new Book ("48 Laws of power", "Robert Greene", 800, true);
let book3 = new Book ("The Alchemist", "P. Coelho", 300, false);

myLibrary.push(book1, book2, book3);
myLibrary.push(book1, book2, book3);
myLibrary.push(book1, book2, book3);
myLibrary.push(book1, book2, book3);
myLibrary.push(book1, book2, book3);

myLibrary.forEach(book => displayBookAsCard(book));
