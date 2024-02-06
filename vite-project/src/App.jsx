import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainTitle from './components/mainTitle/MainTitle'
import Button from './components/button/Button'
import StudentList from './components/studentList/StudentList'
import Login from './pages/login/Login'
import ToDo from './toDo/todo'
import Count from './pages/count/Count'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <MainTitle title="Title1" secondTitle="second"/>
      <Button/>
      <StudentList/>
      <Login/> */}
      <ToDo/>
      <Count/>
    </div>
  )
}

export default App
