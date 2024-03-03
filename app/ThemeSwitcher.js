"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TbSunHigh, TbMoon } from "react-icons/tb";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div>
            <button
                className={`p-2 ease-in-out duration-300 text-xl rounded-md lg:rounded-lg ring-1 ${
                    theme === "dark"
                        ? "ring-zinc-700 hover:bg-[#faf9f684]"
                        : "ring-zinc-300 hover:bg-[#0e111161]"
                }`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? <TbSunHigh /> : <TbMoon />}
            </button>
        </div>
    );
}
