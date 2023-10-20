function customFilterBooks(bookArray) {
  const booksWithU = []
  const booksWithoutU = []

  for (const book of bookArray) {
    const lowercaseBook = book.toLowerCase()

    if (lowercaseBook.includes('у')) {
      booksWithU.push(book)
    } else {
      booksWithoutU.push(book)
    }
  }

  const booksWithUWithText = booksWithU.map(book => book + ' - книга с буквой "у"')

  return {
    booksWithU: booksWithUWithText,
    booksWithoutU,
  };
}

const bookArray = ['Звук и ярость', 'Мастер и Маргарита', 'Гордость и предубеждение', 'Убить пересмешника', 'Война и мир', 'Палата №6', 'Маленький принц', 'Унесенные ветром', 'Властелин колец', 'Гарри Поттер', 'Цвет пурпурный']

const result = customFilterBooks(bookArray)

console.log('Книги с буквой "у":')
result.booksWithU.forEach(book => console.log(book))
console.log('Остальные книги:')
result.booksWithoutU.forEach(book => console.log(book))





const counter = document.getElementById("counter")
document.getElementById("increment").addEventListener("click", () => counter.value++)
document.getElementById("decrement").addEventListener("click", () => counter.value--)