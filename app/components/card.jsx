"use client";
import React from "react";
import { useTheme } from "next-themes";
import Tag from "./tag";

export default function Card({ title, school, year, description, tags }) {
    const { theme } = useTheme();
    return (
        <div
            className={`max-w-84 flex flex-col items-center p-5 ring-1 rounded-lg hover:shadow-md hover:shadow-zinc-500 ease-in-out duration-300 ${
                theme === "dark" ? "ring-zinc-700" : "ring-zinc-300"
            }`}
        >
            <h1 className="font-bold text-center">
                {school}
                <p className="font-normal text-sm">{title}</p>
            </h1>
            <p
                className={`text-xs p-0.5 font-semibold rounded-md ${
                    theme === "dark"
                        ? "bg-[#faf9f684] text-[#0e11119b]"
                        : "bg-[#0e111161] text-[#faf9f6c5]"
                }`}
            >
                {year}
            </p>
            <p className="my-5 text-sm">{description}</p>
            <div className="flex flex-row gap-2 flex-wrap justify-center">
                {tags.map((tagName, index) => (
                    <Tag key={index} name={tagName} />
                ))}
            </div>
        </div>
    );
}
