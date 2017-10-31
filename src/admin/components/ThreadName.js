import React from 'react';
import PT from 'prop-types';
import {patchToThread} from '../../actions';
import {connect} from 'react-redux';

class ThreadName extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            editing : false,
            name : ''
        }
        this.handleNameDoubleClick = this.handleNameDoubleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNameKeyDown = this.handleNameKeyDown.bind(this);
    }

    render () {
        const {editing, name} = this.state;
        const {thread} = this.props;
        return (
            <div className="control">
                {editing &&
                    <input
                        className="input"
                        type="text"
                        placeholder={name ? name : thread.name}
                        value={name}
                        onChange={this.handleNameChange}
                        onKeyDown={this.handleNameKeyDown}
                        autoFocus="true"
                    />
                }
                {!editing &&
                    <p
                        onDoubleClick={this.handleNameDoubleClick}
                    >
                        {name ? name : thread.name}
                    </p>
                }
            </div>
        );
    }

    handleNameDoubleClick (e) {
        e.preventDefault();
        this.setState({
            editing : true
        })
    }
    handleNameChange (e) {
        this.setState({
            name : e.target.value
        })
    }
    handleNameKeyDown (e) {
        if (e.which === 13) {
            const {thread, patchToThread} = this.props;            
            patchToThread(thread.threadId, this.state.name)
            this.setState({
                editing : false
            })
        }
    }


    static propTypes = {
        thread : PT.object.isRequired
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        patchToThread: (threadId, newData, index) => {
            dispatch(patchToThread(threadId, newData, index));
        }
    }
}

export default connect(null, mapDispatchToProps)(ThreadName);