import axios from 'axios'
import { modules } from './mjs/es6Module.mjs'
import { spreadOperator } from './mjs/spreadOperator.mjs'
import { restOperator } from './mjs/restOperator.mjs'
import { templateLiteral } from './mjs/templateLiteral.mjs'
import { booleanOperator } from './mjs/booleanOperator.mjs'
import { arrowFunction } from './mjs/arrowFunction.mjs'
import { mapFilter } from './mjs/mapfilter.mjs'
import { asyncFetchApi } from './mjs/asyncFetchApi.mjs'
import { reminder } from './ts-reminder-specific/reminder'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then((response) => {
  const todo = response.data as Todo
  const id = todo.id
  const title = todo.title
  const completed = todo.completed ? 'Yes' : 'No'

  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: string) => {
  console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished?: ${completed}
  `)
}

// babelcoder js reminder
modules()
spreadOperator()
restOperator()
templateLiteral()
booleanOperator()
arrowFunction()
mapFilter()
asyncFetchApi()

// ts reminder
reminder()
