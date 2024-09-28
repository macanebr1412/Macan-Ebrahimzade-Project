function MyButton({ onClick, children, className }) {
  return (
    <button
      className={`bg-accent-800 text-accent-200 py-2 px-4 rounded-md w-fit hover:bg-accent-600 hover:text-accent-100 transiti transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default MyButton;
