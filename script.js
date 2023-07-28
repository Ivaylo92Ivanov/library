let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.setReadStatus = function () {
        if(this.read===true) {
            return "read";
        } else {
            return "unread";
        };
    };
};


function getFormInfo() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    resetForm();
    return [title, author, pages, read];
}

function resetForm() {
    form.reset();
    form.style.display ="";
}

function addBookToLibrary(){
    [title, author, pages, read] = getFormInfo();
    if(title === "" || author === "" || pages ==="") {
        alert("Please fill Title, Author and Pages fields");
        return;
    };
    myLibrary.push(new Book (title, author, pages, read));
    displayBooksToGrid();
    deleteButtons = assignDeleteButtonsToIndex();
    return;
};

function displayBooksToGrid() {
    // myLibrary.forEach(book => book.displayBookAsCard());
    clearGrid();
    myLibrary.forEach(book => displayBookAsCard(book));
}

function clearGrid() {
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";
}

function showOrHideForm(form){
    if(form.style.display ===""){
        form.style.display = "block";
    } else {
        form.style.display ="";
    };
};

function displayBookAsCard(book) {
    let newCard = document.createElement("div");
    newCard.setAttribute("data-index", myLibrary.indexOf(book));
    newCard.classList.add("card");
    newCard.innerHTML = `
    <div class="card-title">
        <p class="book-title"><h2><em>"${book.title}"</em></h2></p>
        <p>A book by ${book.author}<p>
    </div>
    <div class="card-info-container">
        <p><strong>Title:</strong> "${book.title}"</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages} pages</p>
    </div>
    <div class="card-buttons-wrapper">
        <button class="read-button ${book.setReadStatus()}"></button>
        <button class="delete-button" data-index=${myLibrary.indexOf(book)}><img src="images/delete.svg" alt="delete" height="25px"></button>
    </div>`;
    document.querySelector(".grid-container").appendChild(newCard);
};

// let book1 = new Book("48 laws of power", "R. Greene", 800, true);
// let book2 = new Book("Mastery", "R. Greene", 700, false);
// let book3 = new Book("Laws of human nature", "R. Greene", 500, true);
// myLibrary.push(book1, book2, book3, book2, book3, book2, book3, book2, book3, book2, book3, book2, book3);
// displayBooksToGrid();

let form = document.querySelector("form");
let addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", () => showOrHideForm(form));

let submitNewBookButton = document.querySelector(".submit-button");
submitNewBookButton.addEventListener("click", e => e.preventDefault());
submitNewBookButton.addEventListener("click", () => addBookToLibrary());

let deleteButtons = assignDeleteButtonsToIndex();

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooksToGrid();
    deleteButtons = assignDeleteButtonsToIndex();
}

function assignDeleteButtonsToIndex() {
    let deleteButtons = document.querySelectorAll(".delete-button")
    deleteButtons.forEach(button => button.addEventListener("click", () => {
    deleteBook(button.dataset.index);
    }))
    return deleteButtons;
}




