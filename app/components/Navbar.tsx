"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center relative">
      {/* --- Logo --- */}
      <Logo />

      <div className="hidden sm:flex items-center gap-14 text-lg font-inter">
        <Navbuttons />
      </div>

      <button
        className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-3xl w-52 p-6 flex flex-col gap-6 text-base font-inter sm:hidden z-50">
          <Navbuttons onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}

export const Logo = () => {
  return (
    <Link href={"/"} className="text-[#00b67f] text-xl sm:text-3xl select-none">
      <span className="text-2xl sm:text-4xl font-pacifico">se</span>
      <span className="font-poppins font-semibold">W</span>
      <span className="font-poppins font-semibold italic">N</span>
      <span className="text-2xl sm:text-4xl font-poppins font-semibold">a</span>
    </Link>
  );
};

const Navbuttons = ({ onClick }: { onClick?: () => void }) => {
  const links = ["Features", "Contact", "About Us"];
  return (
    <>
      {links.map((item) => (
        <span
          key={item}
          onClick={onClick}
          className="cursor-pointer hover:scale-[104%] transition-transform duration-300"
        >
          {item}
        </span>
      ))}
    </>
  );
};
