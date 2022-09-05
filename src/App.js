import React from 'react';
import Sidebar from "./Sidebar";

import './App.css';
import Header from "./Header";
import Feed from "./Feed";
import Post from './Post';



function App() {
  return (
    <div className="App">
     <Header />

      <div className='app_body'>

          
          <Sidebar></Sidebar>
          <Feed>
           
          </Feed>
          
      </div>

     
    </div> 
  );
}
  

export default App;
