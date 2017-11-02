import React from 'react';
import PT from 'prop-types';


class AdminButton extends React.Component {
    render () {
        return (
            <div>
                <a className="control">
                    <button
                        className={this.props.classText}
                        onClick={this.props.btnFunction}
                    >
                        {this.props.btnText}
                    </button>
                </a>
            </div>
        );
    }


    static propTypes = {
        classText : PT.string.isRequired,
        btnFunction : PT.func.isRequired,
        btnText : PT.string.isRequired
    }
}


export default AdminButton;