import TODOS from "@/app/data"
import TodoHeader from "./header/todo-header"
import TodoList from "./todo-list"
import SearchBar from "./search-bar"

export default function TodoContainer() {
  return (
    <section className="ring-[1px] ring-line overflow-hidden rounded-lg bg-dark flex flex-col pb-[10px]">
      <TodoHeader todos={TODOS} />
      <SearchBar />
      <TodoList todos={TODOS} />
    </section>
  )
}