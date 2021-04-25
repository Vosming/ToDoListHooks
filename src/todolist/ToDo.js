import React from "react";

export const ToDo = ({toDo, handleToggle}) =>{

    const handleClick = (event) =>{
        event.preventDefault()
        handleToggle(event.currentTarget.todo)
    }

    return(
        <div
            onClick={handleClick}
            className={toDo.isComplete ? "todo strike" : "todo"}
        >
            {toDo.todo}
        </div>
    );
};