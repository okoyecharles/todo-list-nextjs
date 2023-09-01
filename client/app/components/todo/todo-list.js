import { BiSolidPencil } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import Checkbox from "../element/checkbox";
import { a, useSpring, useTransition } from "@react-spring/web";

export default function TodoList({
  todos,
  setEdit,
  setInfo,
  editTodo,
  deleteTodo,
  empty,
}) {
  // Spring animations for list
  const todoHeight = 46.5;
  const bottomPadding = 10;
  const todoSprings = useTransition(
    todos.map((todo, i) => ({ ...todo, y: i * todoHeight })),
    {
      key: (todo) => todo.id,
      from: { height: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
      config: {
        friction: 50,
        tension: 500,
      },
    }
  );
  const todoListSpring = useSpring({
    height: empty.message ? todoHeight : todoHeight * todos.length + bottomPadding,
  });
  const todoListEmptyString = useTransition([empty], {
    key: ({ id }) => id,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    update: { opacity: 1 },
  });

  return (
    <a.ul className="relative" style={todoListSpring}>
      {empty.message
        ? todoListEmptyString((spring, empty) => (
            <a.div className="todo-empty" style={spring}>
              {empty.message}
            </a.div>
          ))
        : todoSprings((spring, todo) => (
            <Todo
              key={todos.id}
              todo={todo}
              setEdit={setEdit}
              setInfo={setInfo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              spring={spring}
            />
          ))}
    </a.ul>
  );
}

function Todo({ todo, setEdit, setInfo, editTodo, deleteTodo, spring }) {
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
    <a.li className="bg-dark font-base absolute w-full" style={spring}>
      <div className="todo-item-container flex items-center">
        <div className="todo-item-action pl-6 py-3">
          <Checkbox
            name="completed"
            id={todo.id}
            checked={todo.completed}
            onChange={handleCheck}
          />
        </div>
        <button
          className="todo-item-title flex-1 cursor-pointer overflow-hidden text-left ring-[1px] ring-transparent ring-inset focus-visible:ring-line outline-none"
          onClick={handleInfo}
        >
          <p className="text-[15px] py-3 px-4 truncate">{todo.name}</p>
        </button>
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
    </a.li>
  );
}
