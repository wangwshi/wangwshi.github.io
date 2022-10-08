import './App.css'; // Not currently used
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Art from './pages/Art'
import CV from './pages/CV'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/cv" element={<CV/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
