import React from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticlesForAdmin, fetchKeywordsByThreadId, patchToThread, fetchQuizzesByThreadId } from '../../actions';
import * as targets from '../../actions/targets';
import AdminButton from './AdminButton';
import AdminKeywordList from './AdminKeywordList';
import ThreadArticles from './ThreadArticles';
import ThreadImage from './ThreadImage';
import ThreadSummary from './ThreadSummary';
import AdminButtonIcon from './AdminButtonIcon';
import ThreadName from './ThreadName';

const testArticles = {
    loading: true,
    data: [
        {
            title: 'Landslide!',
            description: 'Big victory for the guys!',
            url: 'www.google.com',
            age: 3
        },
        {
            title: 'They won!',
            description: 'Massive victory for the folks!',
            url: 'www.imdb.com',
            age: 5
        }
    ]
}

class Thread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            threadQuizzes: []
        }
        this.handleHideClick = this.handleHideClick.bind(this);
        this.handleLoadArticlesClick = this.handleLoadArticlesClick.bind(this);
        this.handleLoadKeywordsClick = this.handleLoadKeywordsClick.bind(this);
        this.updateQuizzes = this.updateQuizzes.bind(this);
    }

    componentDidMount () {
        fetchQuizzesByThreadId(this.props.thread.threadId);
    }

    componentWillReceiveProps (newProps) {
        this.updateQuizzes(newProps.threadQuizzes);
    }

    updateQuizzes (newQuizzes) {
        this.setState({
            threadQuizzes : newQuizzes
        })
    }

    render() {
        const { thread, articles, threadKeywords, tags, patchToThread } = this.props;
        const { hidden } = this.state;
        return (
            <div>
                {hidden && <div className="box">
                    <div className="columns">
                        <div className="column is-three-fifths">
                            <label className="label">Name:</label>
                            <ThreadName
                                thread={thread}
                                patchToThread={patchToThread}
                            />
                            <label className="label">Summary:</label>
                            <ThreadSummary
                                thread={thread}
                                patchToThread={patchToThread}
                            />
                            <div>
                                <p className="label">
                                    Summary last updated:
                                </p>
                                <p>{this.props.thread.lastUpdated}</p>
                                <p className="label">
                                    Thread created:
                                </p>
                                <p>{this.props.thread.dateCreated}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns">
                                <div className="box column">
                                    <p className="title">{thread.score}</p>
                                </div>
                                <div className="control column">
                                    <AdminButtonIcon
                                        iconRef="fa fa-2x fa-minus-circle"
                                        btnFunction={this.handleHideClick}
                                    />
                                </div>
                            </div>
                            <ThreadImage
                                thread={thread}
                                patchToThread={patchToThread}
                            />
                            <div className="field">
                                <AdminButton
                                    classText="button is-success is-fullwidth"
                                    btnFunction={this.handleLoadArticlesClick}
                                    btnText="Load Articles"
                                />
                                <AdminButton
                                    classText="button is-warning is-fullwidth"
                                    btnFunction={this.handleLoadKeywordsClick}
                                    btnText="Load Keywords"
                                />
                                <AdminButton
                                    classText="button is-primary is-fullwidth"
                                    btnFunction={this.handleQuizzesClick}
                                    btnText="Create Quiz"
                                />
                            </div>
                        </div>
                    </div>
                    {articles.loading && <p><strong>Articles loading...</strong></p>}
                    {articles.error && <p><strong>Error fetching articles...</strong></p>}
                    {articles.data.length > 0 &&
                        <ThreadArticles
                            articles={articles.data}
                        />
                    }
                    {threadKeywords.loading && <p><strong>Keywords loading...</strong></p>}
                    {threadKeywords.error && <p><strong>Error fetching keywords...</strong></p>}
                    {threadKeywords.data.length > 0 &&
                        <AdminKeywordList
                            keywords={threadKeywords.data}
                            tags={tags}
                        />
                    }
                </div>}
                {!hidden && <div className="box">
                    <p>{thread.name ? thread.name : "No name yet..."}</p>
                    <AdminButtonIcon
                        iconRef="fa fa-2x fa-minus-circle"
                        btnFunction={this.handleHideClick}
                    />
                </div>}
            </div>
        );
    }

    handleLoadArticlesClick(e) {
        e.preventDefault();
        const { fetchArticlesForAdmin, thread } = this.props;
        fetchArticlesForAdmin(thread.threadId);
    }

    handleLoadKeywordsClick(e) {
        e.preventDefault();
        const { fetchKeywordsByThreadId, thread } = this.props;
        fetchKeywordsByThreadId(thread.threadId);
    }

    handleHideClick(e) {
        e.preventDefault();
        const { hidden } = this.state;
        this.setState({
            hidden: !hidden
        })
    }

    handleQuizzesClick (e) {
        e.preventDefault();

    }

    static propTypes = {
        thread: PT.object.isRequired,
        articles: PT.object.isRequired,
        threadKeywords: PT.object.isRequired,
        tags: PT.object.isRequired
    }
}
const mapStateToProps = (state) => {
    return {
        articles: state.admin.articles,
        threadKeywords: state.admin.threadKeywords,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        patchToThread: (threadId, newData, index) => {
            dispatch(patchToThread(threadId, newData, index));
        },
        fetchArticlesForAdmin: (threadId) => {
            dispatch(fetchArticlesForAdmin(threadId));
        },
        fetchKeywordsByThreadId: (threadId) => {
            dispatch(fetchKeywordsByThreadId(threadId));
        },
        fetchQuizzesByThreadId: (threadId) => {
            dispatch(fetchQuizzesByThreadId(threadId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thread);