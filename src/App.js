import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Tester from "./components/Tester"

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "blue" }}>

        <Navbar />
        <Routes>
          <Route exact path="/two" element={<Header />} >

          </Route>
          <Route exact path="/" element={<Tester />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
