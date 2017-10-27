import React from 'react';
import PT from 'prop-types';
import { connect} from 'react-redux';



class ResultKeywords extends React.Component {
    render () {
        return (
            <div className="uk-card uk-card-default uk-card-body">
                ResultKeywords
            </div>
        );
    }


    static propTypes = {
        loading: PT.bool.isRequired,
        error: PT.any,
        keywords: PT.arrayOf(PT.object).isRequired,        
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.admin.keywords.loading,
        error: state.admin.keywords.error,
        keywords: state.admin.keywords.data
    }
}


export default connect(mapStateToProps)(ResultKeywords)