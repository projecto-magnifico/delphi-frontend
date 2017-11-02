import React from 'react';
import PT from 'prop-types';
import AdminRequests from './AdminRequests';
import ResultKeywords from './ResultKeywords';
import ResultQuizzes from './ResultQuizzes';
import ResultThreads from './ResultThreads';
import { connect } from 'react-redux';


class Results extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            requests : []
        }
    }
    
    componentWillReceiveProps (newProps) {
        if (newProps.requests) {
            this.setState({
                requests : newProps.requests
            })
        }
    }

    render () {
        const {requests} = this.state;
        return (
            <div>
                {requests.length > 0 && <div className="box">
                    <AdminRequests 
                        requests={this.props.requests}
                    />
                </div>}
                <div className="box">
                    <ResultThreads />
                    <ResultKeywords />
                    <ResultQuizzes />
                </div>
            </div>
        );
    }

    static propTypes = {
        requests : PT.array.isRequired
    }
}

const mapStateToProps = state => {
    return {
        requests : state.admin.requests        
    }
}

export default connect(mapStateToProps)(Results);