import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {
    static propTypes = {
        store: PropTypes.object,
        onSwitchColor: PropTypes.func
    }

    handleSwitchColor (color) {
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }
    
    render () {
        return (
            <div>
                <button style={{color: this.props.themeColor}}
                    onClick={this.handleSwitchColor.bind(this, 'red')}
                >Red</button>
                <button style={{color: this.props.themeColor}}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}
                >Blue</button>
            </div>
        )
    }
}

export default ThemeSwitch