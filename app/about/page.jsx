"use client";
import { useTheme } from "next-themes";
import Card from "../components/card";
import IconSkills from "../components/iconSkills";

const lang = ["Python", "C", "JavaScript"];
const frontend = [
    "HTML5",
    "CSS3",
    "ReactJS",
    "NextJS",
    "Tailwind CSS",
    "Material UI",
];
const backend = ["MongoDB", "NodeJS"];
const vc = ["Git", "GitHub"];

export default function About() {
    const { theme } = useTheme();
    return (
        <main className="flex flex-col gap-5 w-full pt-2 lg:pt-6 justify-center">
            <h1 className="font-bold text-2xl lg:text-4xl text-center">
                about
                <p
                    className={`text-sm lg:text-md mt-4 font-normal text-center ${
                        theme === "dark" ? "text-stone-300" : "text-stone-600"
                    }`}
                >
                    A computer science student. An aspiring front-end web
                    developer.
                </p>
            </h1>
            <h1 className="font-bold text-xl lg:text-3xl">
                education
                <div
                    className={`h-1 w-5 ${
                        theme === "dark" ? "bg-[#faf9f6]" : "bg-[#0e1111]"
                    } rounded-full`}
                ></div>
            </h1>
            <div className="flex flex-col gap-2">
                <Card
                    title={"BS Computer Science"}
                    school={"University of the Philippines Los Baños"}
                    year={"2021 - Present"}
                    description={
                        "Relevant coursework: Web Programming, Mobile Computing, Object-Oriented Programming, Data Structures, Operating Systems, Computer Architecture"
                    }
                    tags={[
                        "Python",
                        "C",
                        "JavaScript",
                        "HTML5",
                        "CSS3",
                        "ReactJS",
                    ]}
                />
            </div>
            <h1 className="font-bold text-xl lg:text-3xl">
                work experience
                <div
                    className={`h-1 w-5 ${
                        theme === "dark" ? "bg-[#faf9f6]" : "bg-[#0e1111]"
                    } rounded-full`}
                ></div>
            </h1>
            <div className="flex flex-col gap-2">
                <Card
                    title={"Cuatrix Consulting Services Company Limited"}
                    school={"Junior IT Consultant"}
                    year={"2021 - Present"}
                    description={
                        "Job description: Managed SAP GUI Support tickets using ServiceNow, ensuring timely resolution within Service Level Agreements (SLAs)."
                    }
                    tags={[
                        "Incident Management",
                        "Technical Support",
                        "SAP GUI",
                    ]}
                />
            </div>
            <h1 className="font-bold text-xl lg:text-3xl">
                skills
                <div
                    className={`h-1 w-5 ${
                        theme === "dark" ? "bg-[#faf9f6]" : "bg-[#0e1111]"
                    } rounded-full`}
                ></div>
            </h1>
            <div className="flex flex-row flex-wrap gap-4 lg:gap-10 justify-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl text-center font-bold">language</h1>
                    <div className="flex flex-row gap-3 justify-center flex-wrap">
                        {lang.map((skillName, index) => (
                            <IconSkills skill={skillName} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl text-center font-bold">front-end</h1>
                    <div className="flex flex-row gap-3 justify-center flex-wrap">
                        {frontend.map((skillName, index) => (
                            <IconSkills skill={skillName} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl text-center font-bold">back-end</h1>
                    <div className="flex flex-row gap-3 justify-center flex-wrap">
                        {backend.map((skillName, index) => (
                            <IconSkills skill={skillName} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl text-center font-bold">
                        version control
                    </h1>
                    <div className="flex flex-row gap-3 justify-center flex-wrap">
                        {vc.map((skillName, index) => (
                            <IconSkills skill={skillName} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
