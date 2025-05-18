import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header role="navigation" className="sticky top-0 z-50">
      <nav className="w-full h-16 flex transition-all justify-between bg-white/50  backdrop-blur items-center p-8 border-b border-b-gray-200">
        <div>
          <a
            id="logo"
            className=" hover:text-[#4a3091] transition duration-300 ease-in-out text-2xl"
            href="#home"
          >
            SHIDOKAN KARATE INDIA
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="hover:text-[#4a3091] text-3xl text-black transition duration-300 ease-in-out">
              &#9776;
            </span>
          </button>
        </div>
        <ul className="hidden md:flex gap-8 flex-row justify-between font-semibold">
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#aboutus"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#locations"
            >
              Locations
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#programs"
            >
              Programs
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul
          className={`absolute top-16 left-0 w-full bg-white backdrop-blur py-6  flex flex-col gap-4 items-center md:hidden z-50
    transition-all duration-300 ease-in-out ${
      isOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-4 pointer-events-none"
    }`}
        >
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#locations"
            >
              Locations
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#aboutus"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#programs"
            >
              Programs
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#4a3091] transition duration-300 ease-in-out"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
