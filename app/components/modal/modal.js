export default function Modal({ header, open, children }) {
  return (
    <div
      className={`modal-container absolute top-0 left-0 h-full w-full  z-10 flex items-center justify-center p-6 overflow-hidden transition-colors ${
        open
          ? "bg-dark/30 pointer-events-auto"
          : "bg-transparent pointer-events-none"
      }`}
    >
      <div
        className={`modal ring-[1px] ring-line rounded-lg bg-dark-primary w-[600px] transition-all ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[1rem]"
        }`}
      >
        <header className="modal-header px-6 py-4 font-medium text-light-primary">
          {header}
        </header>
        {children}
      </div>
    </div>
  );
}
