import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Keyword from './Keyword';

class ResultKeywords extends React.Component {
    render() {
        return (
            <div className="box">
                {this.props.keywords.map(keyword => {
                    <Keyword>
                        keyword={keyword}
                    </Keyword>
                })}
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