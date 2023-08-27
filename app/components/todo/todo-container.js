"use client";
import { useMemo, useState } from "react";
import TodoHelper from "@/app/helper/todo";
import TodoHeader from "./header/todo-header";
import SearchBar from "./search-bar";
import TodoList from "./todo-list";
import CreateTodoModal from "../modal/create-todo-modal";
import EditTodoModal from "../modal/edit-todo-modal";
import TodoInfoModal from "../modal/todo-info-modal";
import useStorage from "@/app/hooks/useStorage";

export default function TodoContainer() {
  const [todos, setTodos] = useStorage();
  const { createTodo, editTodo, deleteTodo, filterTodos, getEmptyMessage } = TodoHelper(
    todos,
    setTodos
  );

  // Filters
  const [searchFilter, setSearchFilter] = useState("");
  const [dropdownFilter, setDropdownFilter] = useState("all");
  const filteredTodos = filterTodos({
    search: searchFilter,
    dropdown: dropdownFilter,
  });

  // Modals
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editModalTodo, setEditModalTodo] = useState({});
  const [infoModal, setInfoModal] = useState(false);
  const [infoModalTodo, setInfoModalTodo] = useState({});

  const emptyListMessage = useMemo(() => {
    if (filteredTodos.length === 0) {
      if (todos.length === 0) return getEmptyMessage("default");
      else if (searchFilter) return getEmptyMessage("search", searchFilter);
      else return getEmptyMessage("filter", dropdownFilter);
    }
    return null;
  }, [filteredTodos])

  return (
    <>
      <section className="ring-[1px] ring-line overflow-hidden rounded-lg bg-dark flex flex-col w-[800px]">
        <TodoHeader
          setCreateModal={setCreateModal}
          searchValue={searchFilter}
          setSearchValue={setSearchFilter}
          filterValue={dropdownFilter}
          setFilterValue={setDropdownFilter}
        />
        <SearchBar
          className="md:hidden"
          value={searchFilter}
          setValue={setSearchFilter}
        />
        <TodoList
          todos={filteredTodos}
          setEdit={{
            open: setEditModal,
            todo: setEditModalTodo,
          }}
          setInfo={{
            open: setInfoModal,
            todo: setInfoModalTodo,
          }}
          setTodos={setTodos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          empty={emptyListMessage}
        />
      </section>
      <CreateTodoModal
        open={createModal}
        setOpen={setCreateModal}
        createTodo={createTodo}
      />
      <EditTodoModal
        todo={editModalTodo}
        open={editModal}
        setOpen={setEditModal}
        editTodo={editTodo}
      />
      <TodoInfoModal
        todo={infoModalTodo}
        open={infoModal}
        setOpen={setInfoModal}
      />
    </>
  );
}
