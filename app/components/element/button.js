export default function Button({ children, className = "" }) {
  return (
    <button
      className={`bg-blue hover:bg-blue-primary text-light text-sm font-medium px-2 py-1 rounded-[2.5px] transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
