import React, { Component } from 'react';
import './MusicApp.css';
import Music from './Music';


class MusicApp extends Component {
  render() {
    
    return (
      <div className="App">
        <Music 
         
          canciones = {['ojos Asi','Inevitable','tu']}
        
          /> 
      </div>
    );
  }
}

  
   
  


export default MusicApp;
