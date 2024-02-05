function TodoForm(addTodo) {
// function TodoForm({addTodo}) { //called this way when using attribute method
    const [value, setValue] = React.useState('');

    const handleSubmit = (e) => {
      // The below prevents page reload
      e.preventDefault();
      
      if (!value) return;
      addTodo(value);
      //setTodos([...todos, {text:value, isCompleted:false}]);

      //Reset value string
      setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
          <input 
            className="input"
            type="text"
            value={value}
            placeholder="Add Todo ..."
            onChange={e => setValue(e.target.value)}
          ></input>
        </form>
    );
}