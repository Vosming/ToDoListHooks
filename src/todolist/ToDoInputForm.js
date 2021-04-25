import  {useState} from "react";

export const TodoInputForm = ({addTodo}) => {

    const [input, setInput] = useState('');

    const handleChange = event =>{
        setInput(event.currentTarget.value)
    }

    const handleSubmit = event =>{
        event.preventDefault();
        addTodo(input);
        setInput("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                type="text"
                onChange={handleChange}
                placeholder="todo..."
            />
            <button>Submit</button>
        </form>
    );

};