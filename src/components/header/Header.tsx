import React from "react";
import { TodoTitle } from "../../types";
import { CreateTodo } from "../todo/newtodos/CreateTodo";

interface Props {
    onAddToDO: ({title}: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddToDO}) => {
    return (
        <header className="header">
            <h1>todo <img 
            src="https://img.icons8.com/fluency/48/typescript--v1.png" 
            alt="typescript--v1" 
            style={{width: "60", height:"auto"}}/>
            </h1>
            <CreateTodo 
            onAddToDO={onAddToDO} />
        </header>
    )
}