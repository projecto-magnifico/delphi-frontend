import React from 'react';
import PT from 'prop-types';
import AdminButtonIcon from './AdminButtonIcon';
import ThreadArticles from './ThreadArticles';
class ThreadArticleContainer extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            articlesShowing : true
        }
        this.handleToggleArticlesClick = this.handleToggleArticlesClick.bind(this);
    }

    render () {
        const {articles} = this.props;
        const {articlesShowing} = this.state;
        return (
            <div>
                {articles.loading && <p><strong>Articles loading...</strong></p>}
                {articles.error && <p><strong>Error fetching articles...</strong></p>}
                {articlesShowing && articles.data.length > 0 &&
                    <div>
                        <AdminButtonIcon
                            iconRef="fa fa-2x fa-minus-circle"
                            btnFunction={this.props.handleToggleArticlesClick}
                        />
                        <ThreadArticles
                            articles={articles.data}
                        />
                    </div>
                }
                {!articlesShowing && articles.data.length > 0 &&
                    <div>
                        <label className="label" />
                        <AdminButtonIcon
                            iconRef="fa fa-2x fa-plus-circle"
                            btnFunction={this.handleToggleArticlesClick}
                        />
                    </div>
                }
            </div>
        );
    }

    handleToggleArticlesClick(e) {
        e.preventDefault();
        const { articlesShowing } = this.state;
        this.setState({
            articlesShowing: !articlesShowing
        })
    }

    static propTypes = {
        articles : PT.object.isRequired,
    }
}


export default ThreadArticleContainer;