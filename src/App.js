import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import AboutPg from './pages/About/AboutPg';
import ContactPg from './pages/Contact/ContactPg';
// import Register from './pages/RegisterPg/Register';
// import './pages/RegisterPg/Register.css';
// import SignUp from './pages/SignUpPg/SignUp';
// import './pages/SignUpPg/SignUp.css';
import {Cart} from './pages/Cart'

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutPg />}></Route>
        <Route path="/contact" element={<ContactPg />}></Route> 

        <Route path='/cart' element={<Cart/>} />

      </Routes>
    </Router>
    </>
    //<SignUp/>
    // <Home/>
  );
}

export default App;
