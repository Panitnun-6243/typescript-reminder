import axios from "axios";
import { modules } from "./mjs/module.mjs";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed ? "Yes" : "No";

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: string) => {
  console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished?: ${completed}
  `);
};

// mjs babelcoder reminder
modules();
