import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/portfolio" element={<Portfolio />}>
          </Route>
          <Route exact path="/contact" element={<Contact />}>
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
