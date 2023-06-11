import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        
          <Navbar/> 
          <Home/>
          <Main/>
          <Footer/>       
        </>
      </header>
    </div>
  );
}

export default App;
