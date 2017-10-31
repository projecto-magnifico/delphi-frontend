import React from 'react';
import PT from 'prop-types';


class ThreadSummary extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            editingIndex : -1,
            summary : ['','','']
        }
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleSummaryDoubleClick = this.handleSummaryDoubleClick.bind(this);
        this.handleSummaryKeyDown = this.handleSummaryKeyDown.bind(this);
    }

    render () {
        const {editingIndex, summary} = this.state;
        const {thread} = this.props;
        const useSummary = summary.map((summaryItem, i) => summaryItem ? summaryItem : thread.summary[i])
        
        // summary ? summary : thread.summary;
        return (
            <div className="control">
                {useSummary.map((summaryItem, i) => {
                    return (editingIndex === i) ?
                        <input
                            key={i}
                            className="input"
                            type="text"
                            placeholder={`${i+1}: ${useSummary[i]}`}
                            value={summary[i]}
                            onChange={this.handleSummaryChange}
                            onKeyDown={this.handleSummaryKeyDown}
                            autoFocus="true"
                            data-index={i}
                        />
                    :
                        <p
                            key={i}
                            onDoubleClick={this.handleSummaryDoubleClick}
                            data-index={i}
                        >
                            {`${i+1}: ${summary[i] ? summary[i] : 'Double click to input'}`}
                        </p>
                })}
            </div>
        );
    }

    handleSummaryDoubleClick (e) {
        e.preventDefault();
        this.setState({
            editingIndex : +e.target.dataset.index
        })
    }
    handleSummaryChange (e) {
        const {summary} = this.state;        
        const index = +e.target.dataset.index
        this.setState({
            summary : summary.map((summaryItem, i) => {
                return i === index ? e.target.value : summary[i]
            })
        })
    }
    handleSummaryKeyDown (e) {
        if (e.which === 13) {
            const {thread, patchToThread} = this.props;
            const {editingIndex, summary} = this.state;
            const index = +e.target.dataset.index;
            const columns = ['summary1', 'summary2', 'summary3'];
            const newData = {};
            newData[columns[index]] = e.target.value;
            patchToThread(thread.threadId, newData, index)
            this.setState({
                editingIndex : !summary[editingIndex + 1] ? editingIndex + 1 : -1,
            })
        }
    }

    static propTypes = {
        thread : PT.object.isRequired
    }
}


export default ThreadSummary;