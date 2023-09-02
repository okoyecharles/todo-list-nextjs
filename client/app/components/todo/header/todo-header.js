import { AiFillCaretDown, AiOutlinePlus } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import Button from "../../element/button";
import Logo from "../../logo";
import SearchBar from "../search-bar";
import { useState } from "react";

export default function TodoHeader({
  setCreateModal,
  searchValue,
  setSearchValue,
  filterValue,
  setFilterValue,
}) {
  return (
    <header className="flex gap-4 px-6 py-4 border-b border-line">
      <Logo className="mr-auto" />
      <SearchBar
        className={"hidden md:block"}
        value={searchValue}
        setValue={setSearchValue}
      />
      <TodoFilter value={filterValue} setValue={setFilterValue} />
      <Button
        className="w-[30px] h-[30px] rounded-xl text-base flex justify-center items-center"
        onClick={() => setCreateModal(true)}
      >
        <AiOutlinePlus className="text-[24px]" />
      </Button>
    </header>
  );
}

function TodoFilter({ value, setValue }) {
  const [open, setOpen] = useState(false);
  const filterKeys = {
    all: "Show All",
    incomplete: "Show New",
    complete: "Show Completed",
  };

  const changeFilter = (key) => {
    setValue(key);
    setOpen(false);
  };

  return (
    <div className="todo-filter relative">
      <Button
        className="flex items-center gap-2 bg-line hover:bg-line/75 font-normal"
        onClick={() => setOpen(!open)}
      >
        <p>{filterKeys[value]}</p>
        <AiFillCaretDown
          className={`transition-all text-light-secondary ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </Button>
      <div
        className={`absolute rounded top-[calc(100%+1rem)] right-0 flex z-10 text-sm transition ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-[1rem] pointer-events-none"
        }`}
      >
        {Object.keys(filterKeys).map((key) => (
          <button
            className={`py-2 px-4 bg-dark-primary hover:bg-dark-secondary text-light-primary ring-[1px] ring-line focus:ring-light-secondary outline-none ring-inset font-medium first-of-type:rounded-s-md last-of-type:rounded-e-md`}
            onClick={() => changeFilter(key.toLowerCase())}
            key={key}
            tabIndex={open ? 0 : -1}
          >
            {filterKeys[key].split(" ")[1]}
          </button>
        ))}
      </div>
    </div>
  );
}
