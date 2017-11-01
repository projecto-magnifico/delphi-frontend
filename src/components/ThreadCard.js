import React from 'react';
import {Box} from 'bloomer';
import 'font-awesome/css/font-awesome.min.css';
import TimelineElement from './TimelineElement';
import LatestDevelopmentComponent from './LatestDevelopmentComponent.js'

class ThreadCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
        this.changePage2 = this.changePage2.bind(this);
        this.changePage1 = this.changePage1.bind(this);
    }
        changePage2 (event) {
                event.preventDefault();
                this.setState({
                    index:1
                })
            }

        changePage1 (event) {
            event.preventDefault()
            this.setState({
                index:0
            })
        }

    render() {
        return (    
                <Box id='threadCard' className="tile uk-card-default uk-card-hover">
                    <div className='uk-card'>
                    <i id = 'compress' onClick={this.props.renderAlternativeView} className="fa fa-compress" aria-hidden="true"></i>
                        <i id = 'right' onClick={this.changePage2} className="fa fa-angle-right" aria-hidden="true"></i>
                    <i id ='left'onClick={this.changePage1} className="fa fa-angle-left" aria-hidden="true"></i>
                    <div className='uk-card-header'>
                        <h1>Trump and Russia</h1>
                    </div>
                    {this.state.index === 0 ?
                        <div className="uk-card-body page1">
                        <img id ='threadImg'src="http://politicalhaze.com/wp-content/uploads/2017/06/1-4.jpg"/>
                        <ul className='uk-list uk-list-divider'>
                            <li>US Intelligence community reports Russian hackers hacked DNC to influence 2016 election in favour of Trump</li>
                            <li>Multiple US bodies, including FBI, Senate, House and Special Counsel Rober Muller are investigating Russian interference and possible collusion by the Trump Campaign</li>
                            <li>Special Counsel Robert Muller is also investing Trump for obstruction of justice after the firing of FBI Director James Comey</li>
                            <li><h3>Latest Developments :</h3></li>
                            <ul className='uk-list uk-list-bullet uk-list-divider'>
                                {[1,2,3].map((element, index) => {
                                    return <li><LatestDevelopmentComponent key={index}/></li>
                                })}
                            </ul>
                        </ul>
                        
                    </div>
                        :
                        
                    <div id='page1' className="uk-card-body page1">
                        {[1,2,3,4,5].map((element,index) => {
                            return <TimelineElement key={index}/>
                        })}
                    </div>
                        }
                    </div>
                </Box>
            
        )
    }
}

export default ThreadCard