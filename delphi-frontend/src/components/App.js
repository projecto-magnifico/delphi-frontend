import React, { Component } from 'react';
import BreakingNews from './BreakingNews'
import Earth from './Earth'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className='uk-align-right uk-width-1-4@m'>
         <Earth />
        <BreakingNews />
       
        </div>
      </div>
    );
  }
}

export default App;
