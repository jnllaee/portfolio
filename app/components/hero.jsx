"use client";
import React, { useState, useEffect } from "react";
import ReactTyped from "react-typed";
import { useTheme } from "next-themes";
import Image from "next/image";
import IconButton from "./iconButton";
import Link from "next/link";

export default function Hero() {
    const { theme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col justify-center max-h-screen">
            <div
                className={`flex ${
                    isMobile
                        ? "flex-col gap-8 items-center"
                        : "flex-row justify-between items-center"
                }`}
            >
                <div className={`${isMobile ? "text-center" : ""}`}>
                    <h1 className="font-extrabold text-3xl lg:text-5xl">
                        Janelle M.
                    </h1>
                    <ReactTyped
                        className={`text-xs lg:text-sm font-mono rounded-sm p-0.5 ${
                            theme === "dark"
                                ? "bg-[#faf9f684]"
                                : "bg-[#0e111161]"
                        } ease-in-out duration-300`}
                        strings={["developer", "tech support", "freelancer"]}
                        typeSpeed={50}
                        loop
                    />
                </div>
                {isMobile ? (
                    <Image
                        src="/mypic.jpg"
                        alt="janelle"
                        width={150}
                        height={150}
                        className="filter grayscale hover:filter-none rounded-full ease-in-out duration-300"
                    />
                ) : (
                    <Image
                        src="/mypic.jpg"
                        alt="janelle"
                        width={200}
                        height={200}
                        className="filter grayscale hover:filter-none rounded-full ease-in-out duration-300"
                    />
                )}
            </div>
            <p
                className={`text-sm lg:text-md mt-8 lg:mt-4 text-center lg:text-left ${
                    theme === "dark" ? "text-stone-300" : "text-stone-600"
                }`}
            >
                A 20-year-old aspiring front-end web developer, currently taking
                a Bachelor's degree in Computer Science at the{" "}
                <Link
                    href={"https://uplb.edu.ph/"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="underline hover:font-bold cursor-pointer ease-in-out duration-300">
                        University of the Philippines Los Baños
                    </span>
                </Link>
                . With experience in incident management through ServiceNow.
            </p>
            <div className="flex flex-row justify-center m-4 gap-4">
                <IconButton
                    icon={"github"}
                    link={"https://github.com/jnllaee"}
                    size={"text-2xl"}
                />
                <IconButton
                    icon={"linkedin"}
                    link={"https://www.linkedin.com/in/jnllaeemangalao/"}
                    size={"text-2xl"}
                />
                <IconButton
                    icon={"email"}
                    link={"mailto:jmaxinem25@gmail.com"}
                    size={"text-2xl"}
                />
            </div>
        </div>
    );
}
