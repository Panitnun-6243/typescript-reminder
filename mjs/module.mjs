export const modules = () => {
  console.log('Hello learner')
  const books = {
    id: 1,
    title: 'Todo',
    desc: 'desc',
    subtask: {
      task1: 'walking',
      task2: 'sleeping',
    },
  }
  // const books can change the data because it's object not primitive data type
  // so the 'const' contain pointer to the real object
  // books o-----------> { id: 1, title: 'Todo', desc: 'desc' }
  books.desc = 'description'
  console.log(books)

  // array and function is also an object
  const add = function (a, b) {
    return a + b
  }
  // add 0---------> function (a, b) { return a + b }

  console.log(add(1, 2))

  // destructuring
  const { desc } = books
  const {
    title,
    subtask: { task1, task2 },
  } = books

  const { title: topic } = books // change variable name when destructuring
  console.log(desc)
  console.log(title, task1, task2)
  console.log(topic)

  const languages = ['TH', 'VT', 'EN']
  const [th] = languages
  const [, , en] = languages
  console.log(th)
  console.log(en)
}
