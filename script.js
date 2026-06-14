let books = [];

function addBook() {

    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;

    if(bookName === "" || authorName === ""){
        alert("Fill all fields");
        return;
    }

    books.push({
        bookName,
        authorName
    });

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";

    displayBooks();
}

function displayBooks() {

    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    books.forEach((book,index)=>{

        tableBody.innerHTML += `
        <tr>
            <td>${book.bookName}</td>
            <td>${book.authorName}</td>
            <td>
                <button onclick="editBook(${index})">Edit</button>
                <button onclick="deleteBook(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function editBook(index){

    let newBookName = prompt(
        "Enter New Book Name",
        books[index].bookName
    );

    let newAuthorName = prompt(
        "Enter New Author Name",
        books[index].authorName
    );

    if(newBookName && newAuthorName){
        books[index].bookName = newBookName;
        books[index].authorName = newAuthorName;
        displayBooks();
    }
}

function deleteBook(index){
    books.splice(index,1);
    displayBooks();
}
