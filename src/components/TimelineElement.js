import React from 'react'

class TimelineElement extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <ul className="timeline">
                          <div id ="timeLineCard" className="uk-card-primary uk-card-hover">
                            <li className="timeline-item">
                              <span></span>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p className="heading">Day/Month/Year</p>
                                    <p>Timeline content - Can include any HTML element</p>
                                </div>
                            </li>
                            </div>
                            </ul>
            </div>
        )
    }
}

export default TimelineElement