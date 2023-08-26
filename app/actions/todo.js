import TODOS from "../data";

function validateTodo({ name, desription }) {
  if (name.trim().length === 0) return Error('Please enter a valid name');
  if (desription.trim().length === 0) return Error('Please enter a valid description');
}

function createTodo({ name, desription }) {
  try {
    validateTodo({ name, desription });
    const todo = {
      id: TODOS.length,
      name,
      desription,
      completed: false
    }
    TODOS.push(todo);
    return { message: 'Todo created' }
  } catch(err) {
    return err.message;
  }
}

function editTodo(id, fields) {
  const todo = TODOS.find(todo => todo.id === id);
  try {
    validateTodo(fields);
    TODOS = [...TODOS, { ...todo, ...fields }];
    return { message: 'Todo edited' }
  } catch(err) {
    return err.message;
  }
}

function deleteTodo(id) {
  const index = TODOS.findIndex(todo => todo.id === id);
  if (index !== -1) {
    TODOS = TODOS.filter(todo => todo.id !== id)
  }
}

function searchTodo(search) {
  return TODOS.filter(todo => todo.includes(search));
}

export { createTodo, editTodo, deleteTodo, searchTodo };
