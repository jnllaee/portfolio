"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import ThemeSwitcher from "../ThemeSwitcher";
import { TbMenu2 } from "react-icons/tb";
import NavbarContent from "./navbarContent";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setMounted(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
            if (!isMobile) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobile]);

    if (!mounted) {
        return null;
    }
    return (
        <div className="flex flex-row gap-4 w-full lg:max-w-2xl justify-between">
            {window.innerWidth <= 640 ? (
                <div ref={navbarRef} className="relative">
                    <TbMenu2
                        className={`z-100 p-2 ease-in-out duration-300 text-4xl rounded-md cursor-pointer ring-1 ${
                            theme === "dark"
                                ? "ring-zinc-700 hover:bg-[#faf9f684]"
                                : "ring-zinc-300 hover:bg-[#0e111161]"
                        }`}
                        onClick={toggleNavbar}
                    />
                    <div
                        className={`z-0 absolute flex flex-col left-0 gap-3 p-4 mt-3 -mx-10 w-32 rounded-md shadow-md text-sm ring-1 ${
                            theme === "dark"
                                ? "ring-zinc-700 bg-[#0e1111bf]"
                                : "ring-zinc-300 bg-[#faf9f6d3]"
                        } ${
                            isOpen ? "translate-x-10" : "-translate-x-full"
                        } ease-in-out duration-300`}
                    >
                        <div onClick={toggleNavbar}>
                            <NavbarContent
                                text={"home"}
                                to={"/"}
                                mode={theme}
                            />
                        </div>
                        <div onClick={toggleNavbar}>
                            <NavbarContent
                                text={"about"}
                                to="/about"
                                mode={theme}
                            />
                        </div>
                        <div onClick={toggleNavbar}>
                            <NavbarContent
                                text={"projects"}
                                to={"/projects"}
                                mode={theme}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-row justify-start items-center gap-2">
                    <NavbarContent text={"home"} to={"/"} mode={theme} />
                    <NavbarContent text={"about"} to={"/about"} mode={theme} />
                    <NavbarContent
                        text={"projects"}
                        to={"/projects"}
                        mode={theme}
                    />
                </div>
            )}
            <ThemeSwitcher />
        </div>
    );
}
