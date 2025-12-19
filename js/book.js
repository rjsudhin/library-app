const formUiDialog = document.querySelector('#form-ui-dialog')
const addNewBookButton = document.querySelector('.add-btn')
const submitBtn = document.querySelector('.submit')


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

  resetingInputFields(title, author, pages)
}


function addBookToLibrary(newBook) {
  // take params, create a book then store it in the array
  library.push(newBook)
}


// showcasing each books
function servingLibrary() {
  console.log('serving books in order')
}


function resetingInputFields(...inputs) {
  // reseting values to empty in each input fields
  inputs.forEach(input => {
    input.value = ''
  })
}