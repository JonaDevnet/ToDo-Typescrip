import React, { useState } from "react"
import { TodoTitle } from "../../../types"

interface Props {
    onAddToDO: ({title}: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddToDO }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void =>
    {
        event.preventDefault()
        onAddToDO({title: inputValue})
        setInputValue('')
    }

    return (
       <form onSubmit={handleSubmit}>
        <input
        className="new-todo"
        value={inputValue}
        onChange={(evet) => { setInputValue(evet.target.value)}}
        placeholder="Que vas a hacer?"
        autoFocus 
        ></input>
       </form>
    )
}