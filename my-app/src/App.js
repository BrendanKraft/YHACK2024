import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/loginPage';
import Success from './pages/success';
import Discover from './pages/discover';
import Journey from './pages/journey';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/discover" element={<Discover/>}/>
        <Route path="/journey" element={<Journey/>}/>
      </Routes>
    </Router>
  );
}

export default App;
