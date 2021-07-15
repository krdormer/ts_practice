import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Defines structure of ToDo Obj
interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  // Sets variable as expecting ToDo structure 
  const todo = response.data as ToDo;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
    The ToDo with ID: ${id}
    Has a title of: ${title}
    Is it Finished?: ${finished}
  `);
});
