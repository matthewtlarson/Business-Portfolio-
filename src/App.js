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
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} >
          </Route>
          <Route exact path="/two" element={<About />}>
          </Route>
          <Route exact path="#" element={<Portfolio />}>
          </Route>
          <Route exact path="$" element={<Contact />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
