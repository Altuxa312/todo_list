import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
    // const [text, setText] = useState('')
  // const [todo, setTodo] = useState([])
  // function addTodo() {
  //   setTodo([...todo, text])
  //   setText('')
  // }

  const [play, setPlay] = useState('')
  const [tery, setTery] = useState([])
function addTodo(){
  setTery([...tery, play])
  setPlay('')
}

  return (

    <div className = "App">
          {/* <div>
        <input type="text"
          value={text}
          placeholder='Нипишите'
          onChange={a => setText(a.target.value)} />
        <button onClick={addTodo}>Enter</button>
        <ol>
          {todo.map(item => (
            <li>
              {item}
            </li>
          ))}
        </ol>
      </div> */}

<div>
<input type="text"
value={play}
placeholder='пишите'
onChange={a => setPlay(a.target.value)} />
<button onClick={addTodo}>запуск</button>
  <ol>
{tery.map(item => (
  <li>
  {item}
  </li>
))}
  </ol>

</div>
    </div>
  );
}

export default App;
