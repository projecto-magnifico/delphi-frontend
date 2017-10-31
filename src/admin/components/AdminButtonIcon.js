import React from 'react';
import PT from 'prop-types';

class AdminButton extends React.Component {
    render () {
        return (
            <button 
                className="button is-small"
                onClick={this.props.btnFunction}
            >
                <span className="icon is-large">
                    <i className={this.props.iconRef} aria-hidden="true"></i>
                </span>
            </button>
        );
    }


    static propTypes = {
        iconRef : PT.string.isRequired,
        btnFunction : PT.func.isRequired,
    }
}


export default AdminButton;