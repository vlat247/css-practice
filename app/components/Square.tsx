import React from "react";

interface SquareProps {
    bgColor: string;
}

export default function Square({bgColor}: SquareProps) {
    return (
        <div id="square" className={`w-30 ${bgColor} h-30`}></div>
    )
}

