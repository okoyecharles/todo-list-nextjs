import TodoContainer from "./components/todo/todo-container";

export default function Home() {
  /* APP LAYOUT
    <C> -> Component, <F> -> From Componenet
  
    app
    - nav (github link) <C> done
    - todo container <C> done
      - todo header <C> done
        - logo <C> done
        - search bar <C> done
        - show completed button <F> done
        - create button <F> done
      - todo list <C> done
        - todo <C> done
          - edit marker done
          - checkbox done
          - title done
          - edit button done
          - delete button done
    - create todo modal <F> done
    - todo description modal <F> done
    - modal container <C> done
      - modal title
      - modal content
      - modal buttons
    - button <C> done

  */
  return (
    <TodoContainer />
  )
}
