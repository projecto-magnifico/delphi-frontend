import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BreakingNews from './BreakingNews'
import Earth from './Earth';
import PredictionBoard from './PredictionBoard'
import AdminHome from '../admin/components/AdminHome';
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';
import './css/App.css'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            earthWidth : 700,
            earthHeight : 500,
        }
    }
    render() {
        return (
            <BrowserRouter>
                    <div onClick={this.changeModal} className="App">
                                <Route
                                    exact path="/"
                                    render={() =>
                                    (
                                        <div style={{display: 'inline-block'}}>
                                            <div className='uk-align-left uk-width-1-2'>
                                                <Earth
                                                    width={this.state.earthWidth}
                                                    height={this.state.earthHeight}
                                                />
                                            </div>
                                            <div className='uk-align-right uk-width-1-4'>
                                                <BreakingNews />
                                            </div>
                                            <PredictionBoard />
                                        </div>
                                    )
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
            </BrowserRouter>
        );
    }
}

export default App;
