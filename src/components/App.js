import React, { Component } from 'react';
import BreakingNews from './BreakingNews'
import Earth from './Earth'
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
        <div className='uk-align-left'>
         <Earth 
         width={700}
         height={500}
         />
         </div>
        <div className='uk-align-right uk-width-1-4@m'>
        <BreakingNews />
       
        </div>
        </div>
      </div>
    );
  }
}

export default App;
