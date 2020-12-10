import React, { Component } from 'react'

class PageContent extends Component {
    render() {
        const style ={
            background: 'yellow',
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