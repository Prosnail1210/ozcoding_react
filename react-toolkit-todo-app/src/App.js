import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo, deleteTodo, editTodo, toggleTodo } from './store/todoSlice';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const [text, setText] = useState('')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim() !== ''){
      dispatch(
        addTodo(text)
      )
    }
  }
  const handleDelete=(id)=>{
    dispatch(
      deleteTodo(id)
    )
  }
  const handleEditStart = (id,text)=>{
    setEditId(id)
    setEditText(text)
  }
  const handleEditCancel = () =>{
    setEditId(null)
    setEditText('')
  }
  const hnadleEditSave = (id) =>{
    if(editText.trim()!=='')
      dispatch(editTodo({id:editId,newText:editText}))
    setEditId(null)
    setEditText('')
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={e=>setText(e.target.value)}/>
        <button type='submit'>ADD Todo</button>
      </form>
      <ul>
        {
          todos.map(todo=>(
            <li key={todo.id}>
              {todo.id===editId?
              <>
                <input type='text' value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                <button onClick={hnadleEditSave}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
              </>
              :
              <>
                <input type='checkbox' checked={todo.completed}
                onChange={()=>dispatch(toggleTodo(todo.id))}/>
                <span>
                  {todo.text}
                </span>
                <button onClick={()=>handleEditStart(todo.id,todo.text)}>Edit</button>
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
              </>}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
