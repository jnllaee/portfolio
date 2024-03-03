"use client";
import React from "react";
import { useTheme } from "next-themes";
import Tag from "./tag";
import Image from "next/image";
import Link from "next/link";

export default function PhotoCard({
    imageSrc,
    title,
    description,
    tags,
    link,
}) {
    const { theme } = useTheme();

    return (
        <div
            className={`max-w-84 flex flex-col items-center ring-1 rounded-lg hover:shadow-md hover:shadow-zinc-500 ease-in-out duration-300 overflow-clip ${
                theme === "dark" ? "ring-zinc-700" : "ring-zinc-300"
            }`}
        >
            <Image
                src={imageSrc}
                width={1024}
                height={576}
                alt="sample image"
            />
            <div className="flex flex-col items-center justify-center gap-3 p-5">
                <Link href={link}>
                    <h1 className="font-bold underline hover:text-rose-500 ease-in-out duration-300">
                        {title}
                    </h1>
                </Link>
                <p className="text-sm text-center">{description}</p>
                <div className="flex flex-row justify-center gap-2 flex-wrap">
                    {tags.map((tagName, index) => (
                        <Tag name={tagName} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
