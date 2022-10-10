import './App.scss'; // Not currently used

import {
  HashRouter as Router,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Art from './pages/Art'
import CV from './pages/CV'
import Contact from './pages/Contact'
import { Page } from './components/PageElements';

function App() {
  return (
    <Page.Container>
      <Page.Body>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/wangwshi.github.io" element={<Navigate to="/" replace/>} />
            <Route path="/about" element={<Navigate to="/" replace/>} />
            <Route path="/art" element={<Art/>} />
            <Route path="/cv" element={<CV/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      </Page.Body>
    </Page.Container>
  );
}

export default App;
