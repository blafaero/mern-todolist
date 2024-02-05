function Todo(todo,i,removeTodo) {
    return (
      <div
        key={i}
        className="todo"
        id={i}
        onClick={removeTodo}
        >{todo.text} (-)
      </div>)
}