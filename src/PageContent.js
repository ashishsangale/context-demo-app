import React, { Component } from 'react';
import {ThemeContext} from './contexts/ThemeContext'

class PageContent extends Component {
    static contextType = ThemeContext;
    render() {
        const {isDarkMode} = this.context
        const style ={
            background: isDarkMode ? 'black': 'white',
            height: '100vh',
            width: '100vw'
        }
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContent;