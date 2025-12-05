import { IoClose } from "react-icons/io5";

export default function OverlayMenu({ isOpen, onClose }) {
  const items = ["Home", "About", "Skills", "Contact"];

  return (
    <div
      className={`
        fixed inset-0 bg-black/80 backdrop-blur-xl z-[999]
        flex flex-col items-center justify-center
        transition-all duration-500
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      <button
        className="absolute top-6 right-6 text-4xl text-white hover:scale-125"
        onClick={onClose}
      >
        <IoClose />
      </button>

      {items.map((item, i) => (
        <a
          key={i}
          href={`#${item.toLowerCase()}`}
          onClick={onClose}
          className="
            text-4xl text-white font-bold my-4 
            transition-all duration-300 hover:text-cyan-300 hover:scale-110
          "
        >
          {item}
        </a>
      ))}
    </div>
  );
}
