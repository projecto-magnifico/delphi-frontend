import React from 'react';
import PT from 'prop-types';
import { connect} from 'react-redux';
import {patchToThread} from '../../actions';
import * as targets from '../../actions/targets';

class Thread extends React.Component {
    	constructor (props) {
            super (props);
            this.state = {
                editingName : false,
                waitingForName : false,
                editingSummaryIndex : -1,
                name : '',
                summary : [null, null, null],
                waitingForSummary : [false, false, false],
                requests : [],
                editingImage : false,
                imageUrl : '',
                imageUpdating : false
            }
            this.handleNameChange = this.handleNameChange.bind(this);
            this.handleNameDoubleClick = this.handleNameDoubleClick.bind(this);
            this.handleNameKeyDown = this.handleNameKeyDown.bind(this);
            this.handleSummaryChange = this.handleSummaryChange.bind(this);
            this.handleSummaryDoubleClick = this.handleSummaryDoubleClick.bind(this);
            this.handleSummaryKeyDown = this.handleSummaryKeyDown.bind(this);
            this.handleImgUrlChange = this.handleImgUrlChange.bind(this);
            this.handleImgUrlDoubleClick = this.handleImgUrlDoubleClick.bind(this);
            this.handleImgUrlKeyDown = this.handleImgUrlKeyDown.bind(this);
        }

    componentWillReceiveProps (newProps) {
        const {waitingForSummary, summary} = this.state;
        console.log('before', summary)
        console.log('cwrp', waitingForSummary)        
        let oldProps = this.props;
        const relevantRequests = newProps.requests.filter(request => {
            return request.target === targets.THREADS;
        });
        const newWaitingForSummary = waitingForSummary.map((bool, i) => {
            const relevantRequest = relevantRequests.filter(request => {
                return request.index === i;
            });
            return relevantRequest.length > 0 ? relevantRequest[0].posting : false;
        })
        const newSummary = summary.map((summaryItem, i) => {
            const relevantRequest = relevantRequests.filter(request => {
                return request.index === i;
            });
            console.log(relevantRequest[0])
            return relevantRequest.length > 0 ? 
                relevantRequest[0].response :
                newWaitingForSummary[i] ?
                    this.state.summary[i] :
                    ''
        })
        console.log('after', newSummary)

        this.setState({
            waitingForName : !newProps.thread.name,
            waitingForSummary : newWaitingForSummary,
            summary : newSummary
        });
    }

    render () {
        const {thread, requests} = this.props;
        const {editingName, editingSummaryIndex, name, summary, waitingForName, waitingForSummary, imageUrl} = this.state;
        console.log('render', waitingForSummary)
        return (
            <div className="box">
                <div className="columns">
                    <div className = "column is-three-fifths">
                        <label className="label">Name:</label>
                        <div className="control">
                            {thread.name && !editingName && !waitingForName &&
                                <p
                                    onDoubleClick={this.handleNameDoubleClick}
                                >
                                    {thread.name}
                                </p>
                            }
                            {(!thread.name || editingName || waitingForName) &&
                                <input
                                    className="input"
                                    type="text"
                                    placeholder={thread.name}
                                    value={name}
                                    onChange={this.handleNameChange}
                                    onKeyDown={this.handleNameKeyDown}
                                    autoFocus="true"
                                    disabled={waitingForName}
                                />
                            }
                        </div>
                        <label className="label">Summary:</label>
                        <div className="control">
                            {thread.summary.map((summaryItem, i) => {
                                return (editingSummaryIndex === i || waitingForSummary[i] === true) ?
                                    <input
                                        key={i}
                                        className="input"
                                        type="text"
                                        placeholder={`${i+1}: ${thread.summary[i]}`}
                                        value={summary[i]}
                                        onChange={this.handleSummaryChange}
                                        onKeyDown={this.handleSummaryKeyDown}
                                        autoFocus="true"
                                        disabled={waitingForSummary[i]}
                                        data-index={i}
                                    />
                                :
                                    <p
                                        key={i}
                                        onDoubleClick={this.handleSummaryDoubleClick}
                                        data-index={i}
                                    >
                                        {`${i+1}: ${thread.summary[i] ? thread.summary[i] : 'Double click to input'}`}
                                    </p>
                            })}
                        </div>
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
                    <div className = "column">
                        <div className="box">
                            <p className="title">{this.props.thread.score}</p>
                        </div>
                        <div className="box control">
                            {this.state.editingImage &&
                                <div>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder={this.props.thread.imageUrl}
                                        value={imageUrl}
                                        onChange={this.handleImgUrlChange}
                                        onKeyDown={this.handleImgUrlKeyDown}
                                        autoFocus="true"
                                    />
                                    <p>Enter to confirm</p>
                                </div>
                            }
                            {!this.state.editingImage && !this.state.imageUpdating &&
                                <div>
                                    <image
                                        className="image is-3by2"
                                        onDoubleClick={this.handleImgUrlDoubleClick}
                                    >
                                        <img src={this.props.thread.imgUrl} />
                                    </image>
                                    <p>Double click to change</p>
                                </div>
                            }
                            {!this.state.editingImage && this.state.imageUpdating &&
                                <div
                                    className="box"
                                    onDoubleClick={this.handleImgUrlDoubleClick}
                                >
                                    <p>Image updating...</p>
                                </div>
                            }
                        </div>
                        <div className="field">
                            <p class="control">
                                <button class="button is-success">
                                    Load Articles
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-success">
                                    Load Keywords
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-danger">
                                    Remove From View
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    Articles
                </div>
            </div>
        );
    }

    handleNameDoubleClick (e) {
        e.preventDefault();
        this.setState({
            editingName : true
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
                editingName : false,
                waitingForName : true
            })
        }
    }
    handleSummaryDoubleClick (e) {
        e.preventDefault();
        this.setState({
            editingSummaryIndex : +e.target.dataset.index
        })
    }
    handleSummaryChange (e) {
        const index = +e.target.dataset.index
        this.setState({
            summary : this.state.summary.map((summaryItem, i) => {
                return i === index ? e.target.value : this.state.summary[i]
            })
        })
    }
    handleSummaryKeyDown (e) {
        if (e.which === 13) {
            const {thread, patchToThread} = this.props;
            const {editingSummaryIndex, summary, waitingForSummary} = this.state;
            const index = +e.target.dataset.index;
            const columns = ['summary1', 'summary2', 'summary3'];
            const newData = {};
            newData[columns[index]] = e.target.value;
            patchToThread(thread.threadId, newData, index)
            this.setState({
                editingSummaryIndex : !summary[editingSummaryIndex + 1] ? editingSummaryIndex + 1 : -1,
                waitingForSummary : waitingForSummary.map((bool, i) => {
                    return i === index ? true : waitingForSummary[i]
                })
            })
        }
    }
    handleImgUrlDoubleClick (e) {
        e.preventDefault();
        this.setState({
            editingImage : true
        })
    }
    handleImgUrlChange (e) {
        this.setState({
            imageUrl : e.target.value
        })
    }
    handleImgUrlKeyDown (e) {
        if (e.which === 13) {
            const {thread, patchNameToThread} = this.props;            
            patchToThread(thread.threadId, this.state.imgUrl)
            this.setState({
                editingImage : false,
                imageUpdating : true
            })
        }
    }

    static propTypes = {
        thread : PT.object.isRequired,
    }
}
const mapStateToProps = (state) => {
    return {
        requests : state.admin.requests,
        articles : state.admin.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        patchToThread: (threadId, newData, index) => {
            dispatch(patchToThread(threadId, newData, index));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Thread);