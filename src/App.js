import React,{useState} from "react";
import shortid from "shortid";
import './App.css';
import {TodoInputForm} from "./todolist/ToDoInputForm";
import {ToDoList} from "./todolist/ToDoList";





const App = () => {

    const [toDoList,setTodoList] = useState([]);


    const handleToggle = (id) =>{
        setTodoList(toDoList.map(toDo =>{
            return toDo.id === Number(id) ?
                {...toDo, complete: !toDo.isComplete} :
                {...toDo}
        }));
    }

    const addTask = (input) =>{
        setTodoList([...toDoList,{
            id:shortid.generate(),
            todo:input,
            isComplete: false
        }])
    }

    return (
        <div>
            <h1>To Do List</h1>
            <TodoInputForm addTodo={addTask}/>
            <ToDoList
                toDoList={toDoList}
                handleToggle={handleToggle}
            />
        </div>
  );
}

export default App;
