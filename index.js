function App() {
    const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }       
    ]);

    const addTodo = (value) => {
      setTodos([...todos, {text:value, isCompleted:false}]);
    }

    const removeTodo = (e) => {
      const index = Number(e.target.id);

      let temp = [...todos];
      temp.splice(index,1);
      setTodos(temp);
    }

    return(<>
    <div className="app">
      <div className="todo-list">
        {TodoForm(addTodo)}
        {/* The below is the second way of calling TodoForm but required input arg to TodoForm to be changed. I dont know the difference between the two ways of doing this. */}
        {/*<TodoForm addTodo={addTodo}/>*/}
      </div>
      {todos.map((todo, i) =>
        Todo(todo,i,removeTodo))}
    </div>
    </>);
}

ReactDOM.render(<App/>, document.getElementById('root'));