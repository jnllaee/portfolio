"use client";
import React from "react";

export default function Tag({ name }) {
    return (
        <div className="p-1.5 bg-rose-100 ring-1 ring-rose-400 text-xs text-rose-400 rounded-full">
            {name}
        </div>
    );
}
