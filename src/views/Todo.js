const Todo = (props) => {

    const { todos, title, DeleteDataTodo } = props;
    const handleDeleteTodo = (id) => {
        DeleteDataTodo(id)
    }
    return (
        <div className="todos-container">
            <div className="title">
                {title}
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className="todo-child">{todo.title} &nbsp;
                            <button onClick={() => window.confirm('Are you sure you want to') ? handleDeleteTodo(todo.id) : []}>x</button></li>
                    </div>
                )
            })
            }
            <hr />
        </div>


    )
}

export default Todo;