import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import AdminKeywordList from './AdminKeywordList';

const testKeywords = {
    loading : false,
    data : [
        {
            word : 'catalonia',
            threadId : 1,
            relevance : 63.1236,
            tagId : 2
        },
        {
            word : 'rajoy',
            threadId : 1,
            relevance : 13.67856,
            tagId : 3
        },
        {
            word : 'independence',
            threadId : 1,
            relevance : 13.267,
            tagId : null
        }
    ]
}

const testTags = {
    data : [
        {
            tagId : 2,
            name : 'Catalonia'
        },
        {
            tagId : 3,
            name : 'Manuel Rajoy'
        }
    ]
}

class ResultKeywords extends React.Component {
    render() {
        const {keywords, tags} = this.props;
        return (
            <div className="box">
                {testKeywords.data.length > 0 &&
                    <AdminKeywordList
                        keywords={testKeywords.data}
                        tags={testTags}
                    />
                }
            </div>
        );
    }

    static propTypes = {
        loading: PT.bool.isRequired,
        error: PT.any,
        keywords: PT.arrayOf(PT.object).isRequired,
        tags: PT.object.isRequired
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.admin.keywords.loading,
        error: state.admin.keywords.error,
        keywords: state.admin.keywords.data,
        tags : state.admin.tags
    }
}


export default connect(mapStateToProps)(ResultKeywords)