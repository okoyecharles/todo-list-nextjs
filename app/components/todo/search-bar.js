export default function SearchBar({ className = "" }) {
  return (
    <div className={`relative flex flex-col ${className}`}>
      <input
        className="flex-1 focus:outline-none text-sm text-light-primary placeholder:text-light-secondary bg-dark-secondary px-6 py-3 border-none peer"
        placeholder="Search Todos..."
      />
      <div className="input-marker absolute w-full h-[1px] bottom-0 bg-light origin-center scale-x-0 peer-focus:scale-100 transition"/>
    </div>
  );
}
