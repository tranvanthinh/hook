import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid'
import { CountDown, NewCountDown } from './views/CountDown'
import Blog from './views/Blog'
import DetailBlog from './views/DetailBlog'
import AddNewBlog from './views/AddNewBlog'
import NotFound from './views/NotFound'
import YoutubeSearch from './views/YoutubeSearch'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {

  let [name, setName] = useState('Rest API')
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', type: 'Hayate' },
    { id: 2, title: 'Learn Vue', type: 'Hayate' },
    { id: 3, title: 'Learn Anguler', type: 'Yorn' }
  ])

  // didmount
  useEffect(() => {
    // console.log("TODO")
  }, [input])
  useEffect(() => {
    // console.log("Input")
  }, [todos])

  const handleClick = (event) => {
    if (!input.trim()) {
      alert('Please')
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 10), title: input }
    setTodos([...todos, newTodo])
    setInput('')
  }
  const handleOnChange = (event) => {
    setInput(event.target.value)
  }
  const DeleteDataTodo = (id) => {
    let currentTodo = todos
    currentTodo = currentTodo.filter(item => item.id !== id)
    setTodos(currentTodo)
  }
  const onTimesup = () => {
    alert("End game")
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route exact path="/">
              <h1>Hello world with React and {name}</h1>
            </Route>
            <Route path="/timerapp">
              <CountDown onTimesup={onTimesup} />
              <span>------------------------</span>
              <NewCountDown onTimesup={onTimesup} />
            </Route>
            <Route path="/todoapp">
              <input type="text" value={input} onChange={(event) => handleOnChange(event)} />
              <button type="button" onClick={(event) => handleClick(event)}>Click me</button>
              <Todo
                todos={todos}
                title={'List Todo'}
                DeleteDataTodo={DeleteDataTodo}
              />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/add-newblog">
              <AddNewBlog />
            </Route>
            <Route path="/covid">
              <Covid />
            </Route>
            <Route path="/youtube">
              <YoutubeSearch />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
