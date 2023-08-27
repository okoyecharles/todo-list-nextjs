export default function SearchBar({ value, setValue, className = "" }) {
  return (
    <div className={`relative flex flex-col ${className} md:w-[250px]`}>
      <input
        className="focus:outline-none text-sm text-light-primary placeholder:text-light-secondary bg-dark-secondary px-6 py-3 md:px-[8px] md:py-[7px] md:rounded border-none ring-[1px] ring-transparent md:focus:ring-line peer w-full h-full"
        placeholder="Search Todos..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="input-marker absolute w-full h-[1px] bottom-0 bg-light origin-center scale-x-0 peer-focus:scale-100 transition md:hidden" />
    </div>
  );
}
