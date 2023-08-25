import { BiSolidPencil } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import Checkbox from "../element/checkbox";

export default function TodoList({ todos }) {
  return (
    <ul className="p-0 flex flex-col">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function Todo({ todo }) {
  return (
    <li className="bg-dark relative font-base">
      <div
        className={`edit-marker h-full w-[3px] absolute top-0 left-0 bg-blue ${
          todo && "opacity-0"
        }`}
      />
      <div className="todo-item-container flex items-center">
        <div className="todo-item-action pl-6 py-3">
          <Checkbox name="completed" id={todo.id} />
        </div>
        <div className="todo-item-title flex-1">
          <p className="text-[15px] py-3 px-4">{todo.name}</p>
        </div>
        <div className="todo-item-buttons flex items-center gap-4 py-3 pr-6">
          <button className="ml-auto">
            <BiSolidPencil />
          </button>
          <button>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </li>
  );
}
