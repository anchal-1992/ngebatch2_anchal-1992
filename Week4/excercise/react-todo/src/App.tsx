import './App.css'
import TodoItem from './TodoItem'


const App = () => {
  // eslint-disable-next-line
  const todos = [
    {
      id: 1,
      task: 'Walk the Dog',
      complete: false,
    },
    {
      id: 2,
      task: 'Feed the Cat',
      complete: true,
    },
  ]

  return (
    <div>
   
      <h1>Todo</h1>
      <TodoItem />
      { /* your code goes here... */ }
    </div>
  )
}

export default App
