export default function Button({ children, className = '' }) {
  return (
    <button className={`bg-blue text-light text-sm font-normal px-2 py-1 rounded-[2.5px] ${className}`}>
      {children}
    </button>
  )
}