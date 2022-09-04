import React from 'react';
import Sidebar from "./Sidebar";

import './App.css';
import Header from "./Header";



function App() {
  return (
    <div className="App">
     <Header />

      <div className='app_body'>

          
          <Sidebar></Sidebar>
      </div>

     
    </div> 
  );
}
  

export default App;
