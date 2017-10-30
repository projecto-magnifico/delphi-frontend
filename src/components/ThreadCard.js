import React from 'react';
import {Box} from 'bloomer';


class ThreadCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <Box id='threadCard' className="tile is-3 uk-card-default uk-card-hover">
                    <div className='uk-card'>
                    <div className='uk-card-header'>
                        <h1>Trump and Russia</h1>
                    </div>
                    <div className="uk-card-body">
                        <img id ='threadImg'src="http://politicalhaze.com/wp-content/uploads/2017/06/1-4.jpg"/>
                        <ul className='uk-list uk-list-divider'>
                            <li>US Intelligence community reports Russian hackers hacked DNC to influence 2016 election in favour of Trump</li>
                            <li>Multiple US bodies, including FBI, Senate, House and Special Counsel Rober Muller are investigating Russian interference and possible collusion by the Trump Campaign</li>
                            <li>Special Counsel Robert Muller is also investing Trump for obstruction of justice after the firing of FBI Director James Comey</li>
                            <li><h3>Latest Development:</h3></li>
                            <ul className='uk-list uk-list-bullet uk-list-divider'>
                                <li>Special Counsel Robert Muller issues indictment against former Trump Campaign chairman Paul Manafort</li>
                                <li>Manafort told to surrender to the FBI within the day</li>
                            </ul>
                        </ul>
                        
                    </div>
                    </div>
                </Box>
        )
    }
}

export default ThreadCard