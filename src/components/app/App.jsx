import { Link, Routes, Route } from 'react-router-dom'
import Form from '../Form'
import Home from '../Home'
import TaskList from '../TaskList'
import Clock from './Clock'
import './App.css'
import { useState, useEffect } from 'react'
import GroupSeven from "../GroupSeven";

function App() {

  const [mode, setMode] = useState((localStorage.getItem("modeState") === "true")); // localStorage stores everything as strings hence why true is in string data type

  // console.log(`Mode is: ${mode}`)
  // console.log(typeof mode)

  function changeMode() {
    setMode(mode => !mode);
  }

  useEffect(() => {
    localStorage.setItem("modeState", mode); // const localStorage = { "modeState": mode}
    if (mode) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [mode])
  // PLAN B

  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(darkMode => !darkMode)
  //   // if darkmode is false background color black 
  //   if (darkMode) {
  //     // JS to manipulate DOM
  //     // Select element, change attribute
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "#f9f9f9";
  //   }
  // }

  return (
    <>
      <div className="app-container">
        <nav className="app-nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/form"}>Form</Link>
          <Link to={"/tasks"}>Group Tasks</Link>
          <Link to={"/group-7"}>Group 7</Link>
           <Link to={"/clock"}>Clock</Link>
        </nav>
        <main className="app-main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/tasks' element={<TaskList />} />
            <Route path="/group-7" element={<GroupSeven />} />
            <Route path='/clock' element={ <Clock/>} />
          </Routes>
          <button onClick={changeMode}>Toggle Mode</button>
        </main>
      </div>
    </>
  );
}

export default App;
