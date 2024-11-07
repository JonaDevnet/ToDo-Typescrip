import React from "react";
import { type Todo as TodoType} from "../types";

interface Props extends TodoType {
    onRemoveTodo: (id: number) => void;
}


export const Todo: React.FC<Props> = ({title, completed, onRemoveTodo}) => {
    return (
        <div className="view">
            <input 
                type="checkbox" 
                className="toggle"
                checked={completed}
                onChange={() => {}}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {}}
            >

            </button>
        </div>
    )
}