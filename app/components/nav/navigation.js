import { FaGithub } from "react-icons/fa";

export default function Navigation() {
  return (
    <nav className="py-4 px-6 flex justify-end">
      <a
        href="https://github.com/okoyecharles/todo-list-nextjs"
        target="blank"
        rel="noreferrer noopener"
      >
        <FaGithub className="text-xl text-light-primary" />
      </a>
    </nav>
  );
}
