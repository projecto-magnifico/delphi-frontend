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
            earthWidth : 1000,
            earthHeight : 800,
            earthStatus: 0,
            threadId: 0
        }
        this.renderAlternativeView = this.renderAlternativeView.bind(this);
        this.changeThread = this.changeThread.bind(this);
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

    changeThread(thread_id) {
        this.setState({
            earthStatus: 1,
            threadId: thread_id
        })
    }



    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        exact path="/"
                        render={() =>
                            (
                                <div id="particles-js">
                                    {this.state.earthStatus === 0 ?
                                        <div className='tile is-parent is-12 view uk-animation-fade'>
                                            <div className='title'>
                                                <h1>Delphi_</h1>
                                                <h3>What Happens Next?</h3>
                                            </div>
                                            
                                            <Earth
                                                width={this.state.earthWidth}
                                                height={this.state.earthHeight}
                                                threadId={this.state.threadId}
                                            />
                                            <div className= 'bigNewsFeed'>

                                            <BreakingNews 
                                            earthStatus={this.state.earthStatus}
                                            threadId={this.state.threadId}
                                            changeThread={this.changeThread}
                                            />
                                            </div>
                                            
                                        </div>

                                        :

                                        <div className='test uk-animation-fade'>
                                            <div className='view'>
                                                <div className= 'storyInterface'>
                                                    <div className='earthInApp'>
                                                        <Earth
                                                            width={this.state.earthWidth * 0.8}
                                                            height={this.state.earthHeight * 0.8}
                                                            threadId={this.state.threadId}
                                                        />
                                                        </div>
                                                        <div className='threadInApp'>
                                                            <ThreadCard 
                                                                renderAlternativeView={this.renderAlternativeView}
                                                                earthStatus={this.state.earthStatus}
                                                            />
                                                        </div>
                                                </div>
                                                <div className='All'>
                                                        <PredictionBoard />
                                                </div>
                                            </div >
                                            <div className ='breakingNews'>
                                                <BreakingNews 
                                                threadId={this.state.threadId}
                                                changeThread={this.changeThread}
                                                />
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
