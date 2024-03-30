import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

// Interfaces in TypeScript are used to structure our data
interface Todo {
  id: number;
  completed: boolean;
  title: string;
}

axios.get(apiUrl).then((response) => {
  const { id, completed, title } = response.data as Todo;
  logTodo(id, completed, title);
});

const logTodo = (id: number, completed: boolean, title: string) => {
  console.log(`
      ID is ${id},
      Title is ${title},
      Is it finished? ${completed}
    `);
};
