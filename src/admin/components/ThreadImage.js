import React from 'react';
import PT from 'prop-types';


class ThreadImage extends React.Component {
    	constructor (props) {
            super (props);
            this.state = {
                editing : false,
                imgUrl : ''
            }
            this.handleImgUrlChange = this.handleImgUrlChange.bind(this);
            this.handleImgUrlDoubleClick = this.handleImgUrlDoubleClick.bind(this);
            this.handleImgUrlKeyDown = this.handleImgUrlKeyDown.bind(this);
        }
    render () {
        const {thread} = this.props;
        const {imgUrl, editing} = this.state;
        const useUrl = imgUrl ? imgUrl : thread.imgUrl;
        return (
            <div>
                <div className="box control">
                    {editing &&
                        <div>
                            <input
                                className="input"
                                type="text"
                                placeholder={useUrl}
                                value={imgUrl}
                                onChange={this.handleImgUrlChange}
                                onKeyDown={this.handleImgUrlKeyDown}
                                autoFocus="true"
                            />
                            <p>Enter to confirm</p>
                        </div>
                    }
                    {!editing &&
                        <div>
                            <figure
                                className="image is-3by2"
                                onDoubleClick={this.handleImgUrlDoubleClick}
                            >
                                <img src={useUrl} />
                            </figure>
                            <p>Double click to change</p>
                        </div>
                    }
                </div>
            </div>
        );
    }

    handleImgUrlDoubleClick (e) {
        e.preventDefault();
        const {editing} = this.state;
        this.setState({
            editing : true
        })
    }
    handleImgUrlChange (e) {
        const {imgUrl} = this.state;        
        this.setState({
            imgUrl : e.target.value
        })
    }
    handleImgUrlKeyDown (e) {
        if (e.which === 13) {
            const {patchToThread, thread} = this.props;
            const {imgUrl} = this.state;         
            patchToThread(thread.threadId, imgUrl)
            this.setState({
                editing : false,
            })
        }
    }

    static propTypes = {
        thread : PT.object.isRequired,
        patchToThread : PT.func.isRequired
    }
}


export default ThreadImage;