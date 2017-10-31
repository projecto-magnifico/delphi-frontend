import React from 'react';
import PT from 'prop-types';
import { connect} from 'react-redux';
import Thread from './Thread';

const testThread = {
    threadId : 1,
    name : 'Catalonian Independence Crisis',
    score : 15,
    summary : [
        '',
        '',
        ''
    ],
    lastUpdated : '23-10-17',
    dateCreated : '21-10-18',
    imgUrl : "https://ichef.bbci.co.uk/news/624/cpsprodpb/167AA/production/_93547029_spaincatalonia4641114.png"
}


class ResultThreads extends React.Component {

    render () {
        return (
            <div className="box">
                {[1].map((thread, i) => {
                    return <Thread
                        thread={testThread}
                        positionIndex={i}
                        key={i}
                        tags={this.props.tags}
                    />
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
        threads: state.admin.threads.data,
        tags: state.admin.tags
    }
}


export default connect(mapStateToProps)(ResultThreads)