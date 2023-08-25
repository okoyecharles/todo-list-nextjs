import { FaCheck } from "react-icons/fa";

export default function Checkbox({ name, id }) {
  return (
    <button className="checkbox-button w-[16px] h-[16px] block relative cursor-pointer select-none bg-dark-secondary ring-[1px] ring-line/75 rounded" tabIndex={-1}>
      <FaCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-light" />
      <input
        type="checkbox"
        name={name}
        id={id}
        className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
      ></input>
    </button>
  );
}
