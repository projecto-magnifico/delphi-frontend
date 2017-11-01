import React from 'react';
import PT from 'prop-types';
import AdminTagButton from './AdminButton';
import {patchTagToKeyword} from '../../actions';

class AdminKeywordList extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            tag : '',
            keywordFocusIndex : -1,
            editing : false,
            assessing : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.completeTagEdit = this.completeTagEdit.bind(this);
    }

    render () {
        const {keywords, tags} = this.props;
        const {tag, editing, assessing, keywordFocusIndex} = this.state;
        return (
            <div className="box">
                <table className="table">
                        <thead>
                        <tr>
                            <th />
                            <th>
                            <p><strong>Rel.</strong></p>
                            </th>
                            <th>
                            <p><strong>Tag</strong></p>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {keywords.map((keyword, i) => {
                            let useTag = tag ? tag : tags.data.filter(tag => tag.tagId === keyword.tagId)[0];
                            const possibleTags = tags.data.filter(pTag => pTag.name.includes(tag));
                            return <tr key={i}>
                                <td>
                                    <p><strong>{keyword.word}</strong></p>
                                </td>
                                <td>
                                    <p>{keyword.relevance.toFixed(2)}</p>
                                </td>
                                <td>
                                    {i !== keywordFocusIndex &&
                                        <p
                                            data-index={i}
                                            onDoubleClick={this.handleDoubleClick}
                                        >
                                            {useTag ? useTag.name : 'DC to add...'}
                                        </p>
                                    }
                                    {i === keywordFocusIndex && editing &&
                                        <input
                                            className="input"
                                            type="text"
                                            value={tag}
                                            autoFocus="true"
                                            placeholder={useTag = 'Search...'}
                                            onChange={this.handleChange}
                                            onKeyDown={this.handleKeyDown}
                                        />
                                    }
                                    
                                    {i === keywordFocusIndex && assessing &&
                                        <div>
                                            <p>Choose...</p>
                                            {possibleTags.map((tag, i) => {
                                                return <AdminTagButton
                                                    key={i}
                                                    completeTagEdit={this.completeTagEdit}
                                                    keyword={keyword}
                                                    tag={tag}
                                                />
                                            })}
                                        </div>
                                    }
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    handleChange (e) {
        this.setState({
            tag : e.target.value
        })
    }

    handleDoubleClick (e) {
        console.log('double click!')
        e.preventDefault();
        this.setState({
            keywordFocusIndex : e.target.dataset.index,
            editing : true
        })
        
    }

    handleKeyDown (e) {
        if (e.which === 13) {
            this.setState({
                editing : false,
                assessing : true
            })
        }        
    }

    completeTagEdit () {
        this.setState({
            keywordFocusIndex : -1
        })
    }

    static propTypes = {
        keywords : PT.array.isRequired,
        tags : PT.object.isRequired
    }
}



export default AdminKeywordList;