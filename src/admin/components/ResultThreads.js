import React from 'react';
import PT from 'prop-types';
import { connect} from 'react-redux';
import Thread from './Thread';


class ResultThreads extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                {this.props.threads.map(thread => {
                    <Thread>
                        thread={thread}
                    </Thread>
                })}
            </div>
        );
    }


    static propTypes = {
        loading: PT.bool.isRequired,
        error: PT.any,
        threads: PT.arrayOf(PT.object).isRequired,        
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.admin.threads.loading,
        error: state.admin.threads.error,
        threads: state.admin.threads.data
    }
}


export default connect(mapStateToProps)(ResultThreads)