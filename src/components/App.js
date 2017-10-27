import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BreakingNews from './BreakingNews'
import Earth from './Earth';
import PredictionBoard from './PredictionBoard'
import AdminHome from '../admin/components/AdminHome';
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="App">
                        <header className="App-header">
                        </header>
                        <div uk-grid="true">
                            <div className='uk-align-left'>
                                <Route
                                    exact path="/"
                                    render={() =>
                                        <Earth
                                            width={1200}
                                            height={1000}
                                        />
                                    }
                                />
                                <Route
                                    exact path='/admin'
                                    render={() =>
                                        <div className="Admin">
                                            <AdminHome />
                                        </div>
                                    }
                                />
                            </div>
                            <div className='uk-align-right uk-width-1-4'>
                                <Route
                                    exact path="/"
                                    render={() =>
                                        <BreakingNews />
                                    }
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
