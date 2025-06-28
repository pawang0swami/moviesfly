import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./com/Head";
import Home from "./com/Home";
import About from "./com/About";
import Foot from "./com/Foot";
import Singup from "./com/Singup";
import Add  from "./com/Add";
import Login from "./com/Login";
import Prvate from "./com/Prvate";
import Movie from "./com/movie";
import Edit from "./com/Edit";

function App() {
  return (
    <Router>
      <Head />
      <Routes>

<Route element={<Prvate/>} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/add" element={<Add/>} />
         <Route path="/movie/:id" element={<Movie/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
         
         
</Route>
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />

        
      </Routes>
      <Foot />
    </Router>
  );
}

export default App;
