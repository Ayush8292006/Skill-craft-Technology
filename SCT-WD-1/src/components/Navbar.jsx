import { useRef, useState, useEffect } from "react";
import OverlayMenu from "./OverlayMenu";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/Alogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const timeoutId = useRef(null);

  // Navbar scroll hide + blur + animation
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 60);

      if (currentY < 50) {
        setVisible(true);
        if (timeoutId.current) clearTimeout(timeoutId.current);
        lastScrollY.current = currentY;
        return;
      }

      if (timeoutId.current) clearTimeout(timeoutId.current);

      if (currentY > lastScrollY.current) {
        timeoutId.current = setTimeout(() => setVisible(false), 200);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500 px-6 py-4 flex items-center justify-between
          ${scrolled
            ? "bg-white/10 shadow-xl backdrop-blur-2xl border-b border-white/20 scale-[0.98]"
            : "bg-transparent scale-100 shadow-none border-transparent"
          }
          ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >

        {/* LOGO + NAME */}
        <a href="#home" className="hidden sm:flex items-center gap-3 group cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="
              w-10 h-10 object-cover rounded-full shadow-lg
              transition-all duration-300
              group-hover:scale-110 group-hover:shadow-[0_0_20px_#00eaff]
            "
          />
          <h1
            className="
              text-3xl font-extrabold tracking-wide
              bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400
              text-transparent bg-clip-text drop-shadow-lg
              transition-all duration-300
              group-hover:drop-shadow-[0_0_10px_#00eaff]
              group-hover:scale-105
            "
          >
            Ayush
          </h1>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10 text-lg font-medium">
          {["Home", "About", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                text-white cursor-pointer relative group
                transition-all duration-300 select-none
                hover:text-cyan-300 hover:scale-110
              "
            >
              {item}

              {/* underline */}
              <span
                className="
                  absolute left-1/2 -bottom-1 w-0 h-[2px]
                  bg-cyan-300 transition-all duration-300 
                  group-hover:w-full group-hover:left-0
                "
              ></span>

              {/* glow */}
              <span
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-40 
                  blur-xl bg-cyan-400 transition-all duration-300
                "
              ></span>
            </a>
          ))}
        </ul>

        {/* CONTACT BUTTON */}
        <div className="hidden lg:block ml-6">
          <a
            href="#contact"
            className="
              relative px-6 py-2 rounded-full font-semibold
              bg-gradient-to-r from-pink-500 to-blue-500
              shadow-[0_0_20px_rgba(255,255,255,0.25)]
              transition-all duration-500
              hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]
              hover:scale-110
            "
          >
            Reach Out
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="block lg:hidden text-white text-3xl hover:scale-125 transition-all duration-300"
        >
          <IoMenu />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
