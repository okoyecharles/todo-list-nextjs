import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../element/button";
import Logo from "../../logo";
import SearchBar from "../search-bar";

export default function TodoHeader({ todos }) {
  return (
    <header className="flex gap-4 px-6 py-4 border-b border-line">
      <Logo />
      <SearchBar className={"hidden md:block md:ml-auto"} />
      <Button className="ml-auto md:ml-0">Show Completed</Button>
      <Button className="w-[30px] h-[30px] rounded-xl text-base flex justify-center items-center">
        <AiOutlinePlus className="text-[24px]" />
      </Button>
    </header>
  );
}
