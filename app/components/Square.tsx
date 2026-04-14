import React from "react";

interface SquareProps {
    bgColor: string;
}

export default function Square({bgColor}: SquareProps) {
    return (
        <div className={`square ${bgColor} w-30 h-30 m-4`}></div>
        
    )
}

