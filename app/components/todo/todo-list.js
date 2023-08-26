import { BiSolidPencil } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import Checkbox from "../element/checkbox";

export default function TodoList({
  todos,
  setEdit,
  setInfo,
  editTodo,
  deleteTodo,
  empty,
}) {
  return empty ? (
    empty
  ) : (
    <ul className="p-0 flex flex-col mb-[10px]">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setEdit={setEdit}
          setInfo={setInfo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

function Todo({ todo, setEdit, setInfo, editTodo, deleteTodo }) {
  const handleEdit = () => {
    // This is kinda redundant, just experimenting ;)
    new Promise((resolve) => {
      setEdit.todo(todo);
      resolve();
    }).then(() => {
      setEdit.open(true);
    });
  };

  const handleInfo = () => {
    new Promise((resolve) => {
      setInfo.todo(todo);
      resolve();
    }).then(() => {
      setInfo.open(true);
    });
  };

  const handleCheck = (e) => {
    editTodo(todo.id, { completed: e.target.checked });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="bg-dark relative font-base">
      <div
        className={`edit-marker h-full w-[3px] absolute top-0 left-0 bg-blue ${
          todo && "opacity-0"
        }`}
      />
      <div className="todo-item-container flex items-center">
        <div className="todo-item-action pl-6 py-3">
          <Checkbox
            name="completed"
            id={todo.id}
            checked={todo.completed}
            onChange={handleCheck}
          />
        </div>
        <div
          className="todo-item-title flex-1 cursor-pointer overflow-hidden"
          onClick={handleInfo}
        >
          <p className="text-[15px] py-3 px-4 truncate">{todo.name}</p>
        </div>
        <div className="todo-item-buttons flex items-center gap-4 py-3 pr-6">
          <button
            className="ml-auto hover:text-light-primary transition-colors"
            onClick={handleEdit}
          >
            <BiSolidPencil />
          </button>
          <button
            className="hover:text-light-primary transition-colors"
            onClick={handleDelete}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
}
