import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuHaburguer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-[#2B2B2B] h-[72px] text-white font-bold flex justify-between items-center px-14">
            <NavLink to="/" className="">MD</NavLink>

            <div className="md:hidden" onClick={menuHaburguer}>
                <button className="text-white">
                    {/* Ícone de hambúrguer */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <div className="hidden md:flex gap-7">
                <NavLink to="/" className="">Home</NavLink>
                <NavLink to="/" className="">Sobre</NavLink>
                <NavLink to="/" className="">Projetos</NavLink>
                <NavLink to="/" className="">Currículo</NavLink>
            </div>

            {/* Menu mobile (mostrado apenas quando isOpen é true) */}
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden absolute top-[72px] left-0 w-full bg-[#2B2B2B] py-5`}
            >
                <NavLink to="/" className="block px-4 py-2">Home</NavLink>
                <NavLink to="/" className="block px-4 py-2">Sobre</NavLink>
                <NavLink to="/" className="block px-4 py-2">Projetos</NavLink>
                <NavLink to="/" className="block px-4 py-2">Currículo</NavLink>
            </div>
        </header>
    )
}

export default Header