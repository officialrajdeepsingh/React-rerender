export function Button({
  addNumber,
  count,
}: {
  count: number;
  addNumber: () => void;
}) {
  return (
    <button
      onChange={() => addNumber(count + 1)}
      className="border-2 border-white text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-5 h-5 me-2 -ms-1"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      Add The Number
    </button>
  );
}
