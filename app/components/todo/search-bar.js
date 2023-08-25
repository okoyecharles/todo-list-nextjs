export default function SearchBar({ className = "" }) {
  return (
    <input
      className={`focus:outline-none text-sm text-light-primary placeholder:text-light-secondary bg-dark-secondary px-6 py-3 border-none ${className}`}
      placeholder="Search Todos..."
    />
  );
}
