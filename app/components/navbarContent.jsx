import React from "react";
import Link from "next/link";

export default function NavbarContent({ text, to, mode }) {
    return (
        <div className="group flex flex-col w-auto hover:font-bold ease-in-out duration-300 cursor-pointer">
            <Link
                href={to}
                className={`${
                    mode === "dark" ? "text-[#faf9f6]" : "text-[#0e1111]"
                }`}
            >
                {text}
            </Link>
            <div
                className={`block ${
                    mode === "dark" ? "bg-[#faf9f6]" : "bg-[#0e1111]"
                } w-3 h-0.5 rounded-full group-hover:w-full ease-in-out duration-300`}
            ></div>
        </div>
    );
}
