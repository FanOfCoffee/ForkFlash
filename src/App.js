import React from 'react';
import Footer from './components/Footer';
import './assets/styles/FlashcardApp.css';
import './App.css'
import './assets/styles/Buttons.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Cards from './pages/Cards';
import OtherCards from './pages/OtherCards';
import NotFound from './pages/NotFound';


function App() {



  return (

    <>
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/game' element = {<Cards/>}/>
        <Route path='/cards' element = {<OtherCards/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>

        
        

      <div>
        <Footer/>
      </div>
      </Router>
    </>
  );
}

export default App;
