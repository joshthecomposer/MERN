import { useState } from 'react';
import './App.css';
import TodoForm from  './component/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(t=>t.id != id));
  }

  const toggleShow = (todoItem) => {
    const updatedList = todoList.map((t) => {
      if (t === todoItem) {
        t.isComplete = !t.isComplete
      }
      return t
    })
    setTodoList(updatedList);
  }

  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      {
        todoList.map((t, i) => (
          <div key={t.id}>
            <p className={t.isComplete ? "strike" : null}>{t.content}</p>
            <input type="checkbox" name="isComplete" checked={t.isComplete} onClick={()=>toggleShow(t)} />
            <button onClick={(e)=>deleteTodo(t.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
