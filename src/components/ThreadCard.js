import React from 'react';
import {Box} from 'bloomer';
import 'font-awesome/css/font-awesome.min.css';
import TimelineElement from './TimelineElement';
import LatestDevelopmentComponent from './LatestDevelopmentComponent.js'

const headLines = [
    {title: 'Catalonia sacked leader Carles Puigdemont is currently in Belgium but claims is not seeking asylum'},
    {title: 'Other Catalonian leaders are being trials for rebellion and face harsh sentences'},
    {title: 'King Phelipe appeals for unity, whilst prosecutors seek the arrest of Carles Puigdemont'}
]

const timeline = [
    {title: 'Trump hires manafort as campaign chairman', date: 'March 2016'},
    {title: 'Manafort resigns from the Trump campaign due to ties with the Russian government', date: 'August 2016'},
    {title: 'Trump wins the election', date: 'November 2016'},
    {title: 'Trump fires FBI director James Comey, who was investigating Trump campaign collusion with Russia', date: 'May 2017'},
    {title: 'Attorny General Jef Sessions recuses himself and deputy Rod Rosenstein appoints special counsel Robert Muller to investigate obstruction of justice by Trump', date:'May 2017'},
    {title: 'Paul Manafort and two other executives of the Trump campaign are indicted by special counsel Robert Muler', date: 'October 2017'}
]

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
                <Box id='threadCard' className="tile uk-card-default">
                    <div className='uk-card'>
                    <i id = 'compress' onClick={this.props.renderAlternativeView} className="fa fa-compress" aria-hidden="true"></i>
                        <i id = 'right' onClick={this.changePage2} className="fa fa-angle-right" aria-hidden="true"></i>
                    <i id ='left'onClick={this.changePage1} className="fa fa-angle-left" aria-hidden="true"></i>
                    <div className='uk-card-header'>
                        <h1>Catalonian Independence</h1>
                    </div>
                    {this.state.index === 0 ?
                        <div className="uk-card-body page1">
                            <div className='threadImgContainer'>
                                <img id ='threadImg'src="http://drawingbarcelona.com/wp-content/uploads/2017/02/09-bologna-lanscape-w-468x328.jpg"/>
                            </div>
                            <ul className='uk-list uk-list-divider'>
                            <li>Catalonia is the richest region of spain, accounitng for 20% of its total GDP. It's also culturally and linguistically different from the rest of Spain has traditionally maintained a strong cultural independence</li>
                            <li>In October 2017 the leaders of the Catalonian government called for an independence referendum. The main governement in Madrid however declared the referendum unconstitutional sparking protests in Barcelona </li>
                            <li>The Spanish governement has revoked Catalonia's special status and taken direct control of the region</li>
                            <li><h3>Latest Developments :</h3></li>
                            <ul className='uk-list uk-list-bullet uk-list-divider'>
                                {headLines.map((element, index) => {
                                    return <li><LatestDevelopmentComponent key={index} title={element.title}/></li>
                                })}
                            </ul>
                        </ul>
                        
                    </div>
                        :
                        
                    <div id='page1' className="uk-card-body page1">
                        {timeline.map((element,index) => {
                            return <TimelineElement key={index} title={element.title} date={element.date} />
                        })}
                    </div>
                        }
                    </div>
                </Box>
            
        )
    }
}

export default ThreadCard