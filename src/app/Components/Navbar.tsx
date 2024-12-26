"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

export default function Navbar() {
  // State to toggle the menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-[#A0D8F1] w-full">
      <nav className="bg-[#A0D8F1] mx-auto text-white p-4 h-[80px] 2xl:w-[1500px]">
        <div className="flex justify-between items-center">
          <a href="#" className="text-[30px] font-bold">My Portfolio</a>
          
          {/* Hamburger Icon (visible on small screens) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          
          {/* Navigation Links (visible on large screens, toggled on small screens) */}
          <ul
            className={`list-none flex gap-5 lg:flex ${
              menuOpen ? "flex-col absolute top-[80px] left-0 w-full bg-[#A0D8F1] p-4" : "hidden"
            }`}
          >
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/About">ABOUT</Link>
            </li>
            <li>
              <Link href="/Skills">SKILLS</Link>
            </li>
            <li>
              <Link href="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
