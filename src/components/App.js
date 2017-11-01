import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BreakingNews from './BreakingNews'
import Earth from './Earth';
import AdminHome from '../admin/components/AdminHome';
import ThreadCard from './ThreadCard.js';
import PredictionBoard from './PredictionBoard.js'
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';
import './css/App.css'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css';




class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

            currentUser: "Mitchell",
            earthWidth : 1100,
            earthHeight : 900,
            earthStatus: 1
        }
        this.renderAlternativeView = this.renderAlternativeView.bind(this);
    }

    renderAlternativeView(event) {
        event.preventDefault();
        if(this.state.earthStatus === 1) {
            this.setState({
                earthWidth: 1000,
                earthHeight: 800,
                earthStatus: 0
            })
        }

        if(this.state.earthStatus === 0) {
            this.setState({
                earthWidth: 1000,
                earthHeight: 800,
                earthStatus: 1
            })
        }
    }

    render() {
        return (
            <BrowserRouter>
                    <div>
                                <Route
                                    exact path="/"
                                    render={() =>
                                    (

            

                                        <div> 
                                            {this.state.earthStatus === 0 ? 
                                            <div className='tile is-parent is-12 view uk-animation-fade'>

                                                <Earth
                                                width={this.state.earthWidth}
                                                height={this.state.earthHeight}
                                                />
                                                <BreakingNews />
                                            </div>

                                                :

                                               <div>
                                            <div className='tile is-12'>
                                                    <Earth className="tile is-child"
                                                        width={this.state.earthWidth * 0.8}
                                                        height={this.state.earthHeight * 0.8}
                                                    />
                                                     <ThreadCard className="tile is-child"
                                                     renderAlternativeView={this.renderAlternativeView}
                                                     earthStatus={this.state.earthStatus}
                                                     />
                                                <BreakingNews />
                                            </div >
                                            <div className ='All'>
                                                        <PredictionBoard />
                                            </div>
                                            </div>
                                          
                                                } 
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
