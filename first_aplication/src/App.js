import React from 'react';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Aside from './Components/Aside';
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>

      <div class="container">
        <div class="row">
          <Aside/>
          <Main/>  
        </div>
      </div>

      <Footer/>
 
    </div>
  );
}

export default App;
