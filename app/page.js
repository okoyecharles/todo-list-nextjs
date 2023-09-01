import { getServerSession } from "next-auth";
import TodoContainer from "./components/todo/todo-container";
import { redirect } from "next/navigation";
import options from "./api/auth/[...nextauth]/options";
import Navigation from "./components/nav/navigation";

export default async function Home() {
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

    APP FUNCTIONALITY
    - create todo
    - edit todo
    - mark todo as completed
    - delete todo
    - view todo info
    - change show completed to dropdown
    - search todo
    - reorder todos (not required now)

    TODOS
    - Remove blue click highlight on mobile
    - Prepend todo to list (not append)
    - Add todo reordering

  */
  // User session
  const session = await getServerSession(options);
  if (!session) redirect("/api/auth/signin?callbackUrl=/");

  return (
    <>
      <Navigation user={session?.user} />
      <section className="px-6 py-4 flex justify-center">
        <TodoContainer user={session?.user} />
      </section>
    </>
  );
}
