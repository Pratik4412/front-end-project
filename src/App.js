import "./App.css";
import Home from "./Routes/Home";
import {Route, Routes} from "react-router-dom"
import Service from "./Routes/Service";
import About from "./Routes/About";
import Contact from "./Routes/Contact";


export default function App() {
  return (
    <div className="App">
      
       
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
       
        
    </div>
  );
}


