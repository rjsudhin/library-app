const formUiDialog = document.querySelector('#form-ui-dialog')
const addNewBookButton = document.querySelector('#add-btn')
const submitBtn = document.querySelector('.submit')
const booksContainer = document.querySelector('#books-container')


// add new button clicks showing the form ui 
addNewBookButton.addEventListener('click', () => {
  formUiDialog.showModal()
})


// submit of new book creats
submitBtn.addEventListener('click', (e) => {
  e.preventDefault() // don't want to submit this just fake project
  formUiDialog.close()
  creatingBook()
})


const library = [] // collection of books stored here

// constructor
function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.id = crypto.randomUUID()
}

// deleting Book
Book.prototype.deleteBook = function() {
  let currentBookId = this.id
  // checking the id of everytime
  for (let i = 0; i < library.length; i++) {
    if (library[i].id == currentBookId) {
      library.splice(i, 1) // remove the specific condition
      i--
      servingLibrary() // serving updated library
    }
  }
}


// creating new book
function creatingBook() {
  // input values from form dialog 
  let title = document.querySelector('#title') 
  let author = document.querySelector('#author') 
  let pages = document.querySelector('#pages')

  let titleInput = title.value 
  let authorInput = author.value 
  let pagesInput = pages.value

  const book = new Book(titleInput, authorInput, pagesInput)
  addBookToLibrary(book) // adding the collections array
  servingLibrary() // showing created books

  // resetingInputFields(title, author, pages)
}


function addBookToLibrary(newBook) {
  // take params, create a book then store it in the array
  library.push(newBook)
}


// showcasing each books
function servingLibrary() {
  booksContainer.innerHTML = ''
  console.log('serving books in order')
  // creation of each cards
  for (const book of library) {
    let bookCard = document.createElement('div')
    bookCard.dataset.bookId = book.id // added uniq id for every cards 
    bookCard.classList.add('book-card')

    // title of the book card
    let bookTitle = document.createElement('h2')
    bookTitle.classList.add('book-title')
    bookTitle.textContent = book.title

    // author of the book card
    let bookAuthor = document.createElement('p')
    bookAuthor.classList.add('book-author')
    bookAuthor.textContent = book.author

    // page of the book card
    let bookPages = document.createElement('p')
    bookPages.classList.add('book-pages')
    bookPages.textContent = book.pages

    // delete button
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'delete'
    deleteButton.addEventListener('click', (e) => {
      book.deleteBook()
    })

    // inner section for checking things
    let innerContainer = document.createElement('div')
    innerContainer.classList.add('inner-container')

    // checking reports para
    let checkingReportsText = document.createElement('p')
    checkingReportsText.textContent = 'Not Readed'

    // checking read Reports
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'

    innerContainer.append(checkingReportsText, checkBox)


    console.log(bookCard)
    bookCard.append(bookTitle, bookAuthor, innerContainer, deleteButton)
    booksContainer.appendChild(bookCard)
  }
}


function resetingInputFields(...inputs) {
  // reseting values to empty in each input fields
  inputs.forEach(input => {
    input.value = ''
  })
}