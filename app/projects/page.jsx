import React from "react";
import PhotoCard from "../components/photoCard";

export default function Projects() {
    return (
        <main className="flex flex-col gap-5 w-10/12 pt-2 lg:pt-6 justify-center">
            <h1 className="font-bold text-2xl lg:text-4xl text-center">
                projects
            </h1>
            <div className="flex flex-col flex-wrap gap-5 justify-center items-center">
                <PhotoCard
                    imageSrc={"/proj_portfolio.png"}
                    title={"Personal Portfolio"}
                    description={
                        "Created a portfolio highlighting my skills, projects, and experience."
                    }
                    tags={["ReactJS", "NextJS", "Tailwind CSS"]}
                    link={"/"}
                />
            </div>
        </main>
    );
}
