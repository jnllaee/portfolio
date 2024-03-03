import React from "react";
import {
    SiHtml5,
    SiTailwindcss,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiPython,
    SiC,
    SiMongodb,
    SiMui,
    SiGit,
    SiGithub,
} from "react-icons/si";

const ICON_MAP = {
    HTML5: SiHtml5,
    CSS3: SiCss3,
    JavaScript: SiJavascript,
    ReactJS: SiReact,
    NodeJS: SiNodedotjs,
    MongoDB: SiMongodb,
    NextJS: SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    Python: SiPython,
    C: SiC,
    Git: SiGit,
    GitHub: SiGithub,
    "Material UI": SiMui,
};

export default function IconSkills({ skill }) {
    const Skill = ICON_MAP[skill];

    if (!Skill) {
        return null;
    }
    return (
        <div className="flex flex-col justify-center items-center group">
            <Skill className="text-xl lg:text-2xl group-hover:text-rose-500 ease-in-out duration-300" />
            <p className="text-xs group-hover:text-rose-500 ease-in-out duration-300">
                {skill}
            </p>
        </div>
    );
}
