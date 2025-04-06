import React from "react";
import logo from '../assets/nmlogo.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img draggable={false} src={logo} className="mx-2" width={60} height={33} />
            </a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
            <a href="https://www.linkedin.com/in/narendra-maurya-6b4205227/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/01-Narendra" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
        </div>
    </nav>
  );
};

export default Navbar;
