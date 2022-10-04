import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Art from './components/Art'
import CV from './components/CV'
import Contact from './components/Contact'

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/cv" element={<CV/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
