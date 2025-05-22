import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Form from '../Form';
import Home from '../Home';
import TaskList from '../TaskList';
import TeamInfo from '../../pages/TeamInfo';
import TeamsList from '../../pages/TeamsList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="app-nav">
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/tasks">Group Tasks</Link>
        <Link to="/teams">Teams List</Link>
        <Link to="/team-info">Team Info</Link>
      </nav>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/teams" element={<TeamsList />} />
          <Route path="/teams/:id" element={<TeamInfo />} />
          <Route path="/team-info" element={<Navigate to="/teams/1" replace />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;
