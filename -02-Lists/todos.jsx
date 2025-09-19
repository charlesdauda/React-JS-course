import React from 'react'


const Todos = () => {

    const todolist = [
        {id: 1, task: "Learn React basics", completed: true},
        {id: 2, task: "Practice lists in React", completed: false },
        {id: 3, task: "Build a small project", completed: false }
    ];

    return (
        <>
        { todolist.map((todo =>(
            <ul key={todo.id}>
                <li>{todo.task} - {todo.completed ? '✅ Task Completed' : '⏳ Task not Complete'}</li>
            </ul>
        )))}
        </>
    )
}

export default Todos;