import React from 'react'
import useFetch from './My_custom_hook'

const TodoExample = () => {
    const [todos, setTodos]=useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
        <h1>TodoExample</h1>
        {
            todos.map(
                (todo)=>{
                    return(
                        <p key={todo.id}>{todo.title}</p>
                    )
                }

            )
        }
    </div>
  )
}

export default TodoExample