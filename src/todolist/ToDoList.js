import React from "react";
import {ToDo} from "./ToDo";

export const ToDoList =({toDoList,handleToggle})=>{
    return(
        <div>
            {toDoList.map( toDo=>{
                return(
                    <ToDo
                        toDo={toDo}
                        handleToggle={handleToggle}
                    />
                )
            })}
        </div>
    );
};