import React from 'react';
import PT from 'prop-types';
import AdminButtonIcon from './AdminButtonIcon';
import AdminKeywordList from './AdminKeywordList';

class ThreadKeywordContainer extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            keywordsShowing : true
        }
        this.handleToggleKeywordsClick = this.handleToggleKeywordsClick.bind(this);
    }
    render () {
        const {keywords} = this.props;
        const {keywordsShowing} = this.state;
        return (
            <div>
                {keywords.loading && <p><strong>Keywords loading...</strong></p>}
                {keywords.error && <p><strong>Error fetching keywords...</strong></p>}
                {keywordsShowing && keywords.data.length > 0 &&
                    <div>
                        <AdminButtonIcon
                            iconRef="fa fa-2x fa-minus-circle"
                            btnFunction={this.handleToggleKeywordsClick}
                        />
                        <AdminKeywordList
                            keywords={keywords.data}
                        />
                    </div>
                }
                {!keywordsShowing && keywords.data.length > 0 &&
                    <div>
                        <label className="label" />
                        <AdminButtonIcon
                            iconRef="fa fa-2x fa-plus-circle"
                            btnFunction={this.handleToggleKeywordsClick}
                        />
                    </div>
                }
            </div>
        );
    }

    handleToggleKeywordsClick(e) {
        e.preventDefault();
        const { keywordsShowing } = this.state;
        this.setState({
            keywordsShowing: !keywordsShowing
        })
    }


    static propTypes = {
        keywords : PT.object.isRequired
    }
}


export default ThreadKeywordContainer;