import TODOS from "@/app/data";
import TodoHeader from "./header/todo-header";
import TodoList from "./todo-list";
import SearchBar from "./search-bar";

export default function TodoContainer() {
  return (
    <section className="ring-[1px] ring-line overflow-hidden rounded-lg bg-dark flex flex-col pb-[10px] w-[800px]">
      <TodoHeader todos={TODOS} />
      <SearchBar className="md:hidden" />
      <TodoList todos={TODOS} />
    </section>
  );
}
