import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BreakingNews from './BreakingNews'
import Earth from './Earth';
import AdminHome from '../admin/components/AdminHome';
import ThreadCard from './ThreadCard.js'
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';
import './css/App.css'
import 'bulma/css/bulma.css'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            earthWidth : 800,
            earthHeight : 600
        }
    }
    render() {
        return (
            <BrowserRouter>
                    <div className="App">
                                <Route
                                    exact path="/"
                                    render={() =>
                                    (
                                        <div>  
                                            <div className='tile is-parent is-12 view'>
                                                    <Earth
                                                        width={this.state.earthWidth}
                                                        height={this.state.earthHeight}
                                                    />
                                                     <ThreadCard />                                               
                                                    <BreakingNews />
                                            </div>
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
