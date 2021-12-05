import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import ListStudent from './components/ListStudent';
import Student from './components/Student';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/students" exact element={ <ListStudent /> } />
            <Route path="/student/:id" exact element={ <Student /> } />
            <Route path="/" exact element={ <Home /> } />
            <Route path="*" exact element={ <NotFound /> } />
        </Routes>
      </Router>
    </div>
  );
}