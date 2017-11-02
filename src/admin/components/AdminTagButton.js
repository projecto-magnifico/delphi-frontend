import React from 'react';
import PT from 'prop-types';
import {patchTagToKeyword} from '../../actions';
import {connect} from 'react-redux';

class AdminTagButton extends React.Component {
    constructor (props) {
        super (props);
        
        this.handleClick = this.handleClick.bind(this);        
    }
    render () {
        const {keyword, tag} = this.props;
        return (
            <a className="control">
                <button 
                    className="btn is-primary"
                    onClick={this.handleClick}
                >
                    {tag.name}
                </button>
            </a>
        );
    }

    handleClick (e) {
        e.preventDefault();
        const {keyword, tag, index, completeTagEdit, patchTagToKeyword} = this.props;
        patchTagToKeyword(keyword.keywordId, tag.tagId, index);
        completeTagEdit();
    }

    static propTypes = {
        tag : PT.object.isRequired,
        keyword : PT.object,
        index : PT.number.isRequired,
        patchTagToKeyword : PT.func.isRequired,
        completeTagEdit : PT.func.isRequired
    }
}

const mapDispatchToProps = dispatch => ({
    patchTagToKeyword : (keyword_id, tag_id, index) => {
        dispatch(patchTagToKeyword(keyword_id, tag_id, index));
    }
})


export default connect(null, mapDispatchToProps)(AdminTagButton);