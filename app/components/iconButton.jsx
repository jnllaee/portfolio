import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const ICON_MAP = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    email: FaEnvelope,
};

const IconButton = ({ icon, link, size }) => {
    const IconComponent = ICON_MAP[icon];

    if (!IconComponent) {
        return null;
    }
    return (
        <Link href={link} rel="noopener noreferrer" target="_blank">
            <IconComponent
                className={`hover:fill-rose-500 ease-in-out duration-300 ${size}`}
            />
        </Link>
    );
};

export default IconButton;
