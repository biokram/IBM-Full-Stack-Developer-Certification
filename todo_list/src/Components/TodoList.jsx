import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});
    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];      
        newTodos.splice(index, 1);         
        setTodos(newTodos);                
    };

    const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];                        
            newTodos[index].lists.push(listInputs[index]);      
            setTodos(newTodos);                                 
            setListInputs({ ...listInputs, [index]: '' });      
        }
    };

    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value }); 
    };
    return (
        <>
            {/* Input section to add a new heading */}
            <div className="todo-container">
                <h1 className="title">My Todo List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        className="heading-input"
                        placeholder="Enter heading"
                        value={headingInput}
                        onChange={(e) => setHeadingInput(e.target.value)} 
                    />
                    <button className="add-list-button" onClick={handleAddTodo}>
                        Add Heading
                    </button>
                </div>
            </div>
            {/* Main section displaying all todos */}
            <div className="todo_main">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-card">
                        <div className="heading_todo">
                            <h3>{todo.heading}</h3> {/* Display heading */}
                            <button
                                className="delete-button-heading"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                Delete Heading
                            </button>
                        </div>
                        {/* Render all list items under this heading */}
                        <ul>
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className='todo_inside_list'>
                                    <p>{list}</p> {/* Display individual list item */}
                                </li>
                            ))}
                        </ul>
                        {/* Input section to add list item under this heading */}
                        <div className='add_list'>
                            <input
                                type="text"
                                className="list-input"
                                placeholder="Add List"
                                value={listInputs[index] || ''} // Maintain controlled input
                                onChange={(e) => handleListInputChange(index, e.target.value)} // Update list input value
                            />
                            <button
                                className="add-list-button"
                                onClick={() => handleAddList(index)}
                            >
                                Add List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TodoList;