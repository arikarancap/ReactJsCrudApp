import React, { useState } from 'react'
import List from './components/List'
import { baseURL } from './utils/constant'
import axios from 'axios';
const App = () => {
  const [input, setInput] = React.useState("")
  const [tasks, setTasks] = React.useState([])
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((response) => {
        console.log("Datas Showing", response.data)
        setTasks(response.data)
      })
  }, [updateUI])

  const addTask = () => {
    axios.post(`${baseURL}/save`, { task: input })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    setInput("");
    setUpdateUI((prevState) => !prevState);

  }
  const updateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, { task: input }).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
      setUpdateId(null);
      setInput("");
    });
  };

  return (
    <div className='container'>
         <div className='titleContainer'>        <h1 className="title">CRUD Operations</h1>
        </div>
      <main>
     
        <div className='input_holder'>
          <input type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={updateId ? updateTask : addTask}>
            {updateId ? 'Update Task' : 'Add Task'}
          </button>
        </div>
        <ul>
          {tasks.map((task) =>
            <List
              key={task._id}
              id={task._id}
              task={task.task}
              setUpdateUI={setUpdateUI}
              updateMode={updateMode}
            />
          )}
        </ul>
      </main>
    </div>
  )
}

export default App;
