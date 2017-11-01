import React from 'react'

class AnswerGroups extends React.Component {
    constructor(props) {
        super(props)
        
    }
 
    render() {
       
        return (
                <div>
                        <div className="uk-card uk-card-body" id="newsBody">
                            <h3>Did you mean this?</h3>
                        </div>
                        <div className="uk-card uk-card-body" id="newsBody">
                             <h3>Did you mean that?</h3>
                        </div>
                        <div className="uk-card uk-card-body" id="newsBody">
                        <button class="uk-button uk-button-default">Make new prediction</button>

                        </div>
                        
                    </div>
        )
    }
}

export default AnswerGroups