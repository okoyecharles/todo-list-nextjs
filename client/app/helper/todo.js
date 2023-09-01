import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export default function TodoHelper(todos, setTodos) {
  function validateTodo(fields) {
    if (fields.name?.trim().length === 0)
      throw Error("Please enter a valid name");
  }

  function capitalize(str) {
    const newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
  }

  return {
    async getTodos() {
      
    },
    createTodo({ name, description }) {
      try {
        validateTodo({ name, description });
        const todo = {
          id: uuidv4(),
          name: name.trim(),
          description: description.trim(),
          completed: false,
        };
        setTodos([ todo, ...todos ]);
        return { success: true };
      } catch (error) {
        return { error };
      }
    },
    editTodo(id, { name, description, completed }) {
      try {
        validateTodo({ name, description });
        const prevTodo = todos.find((todo) => todo.id === id);
        const fields = {
          name: name?.trim() ?? prevTodo.name,
          description: description?.trim() ?? prevTodo.description,
          completed: completed ?? prevTodo.completed,
        };
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) return { ...todo, ...fields };
            return todo;
          })
        );
        return { success: true };
      } catch (error) {
        return { error };
      }
    },
    deleteTodo(id) {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    filterTodos({ search, dropdown }) {
      const filtered = todos
        .filter((todo) => {
          const name = todo.name.toLowerCase();
          return name.includes(search.toLowerCase().trim());
        })
        .filter((searchedTodo) => {
          switch (dropdown) {
            case "all":
              return true;
            case "incomplete":
              return !searchedTodo.completed;
            case "complete":
              return searchedTodo.completed;
            default:
              return false;
          }
        });
      return filtered;
    },
    getEmptyMessage(type, filterValue = null) {
      const res = { id: null, message: null }
      switch (type) {
        case "search":
          res.id = "search";
          res.message = (
            <p className="px-6 py-3 text-[15px] truncate">
              No Todo matches the search{" "}
              <span className="text-blue">"{filterValue.trim()}"</span>
            </p>
          );
          break;
        case "filter":
          res.id = filterValue;
          res.message =  (
            <p className="px-6 py-3 text-[15px]">
              There are currently no{" "}
              <span className="text-blue">{capitalize(filterValue)}</span> Todos
            </p>
          );
          break;
        default:
          res.id = "default";
          res.message = (
            <div className="px-6 py-3 text-[15px] flex flex-col items-center">
              <p className="flex gap-[0.5ch] items-center">
                Click{" "}
                <span className="bg-blue rounded text-base inline-block p-[2px] h-fit">
                  <AiOutlinePlus className="text-[12px] text-light" />
                </span>{" "}
                to create a Todo
              </p>
            </div>
          );
          break;
      }
      return res;
    },
  };
}
