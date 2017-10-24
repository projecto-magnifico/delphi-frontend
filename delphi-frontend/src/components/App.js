import React, { Component } from 'react';
import BreakingNews from './BreakingNews'
import Earth from './Earth'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
        <div className='uk-align-left'>
         <Earth 
         width={600}
         height={400}
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
