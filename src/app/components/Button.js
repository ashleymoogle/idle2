import React from 'react' //eslint-disable-line

export default class Button extends React.Component {
    render () {
        return (
            <button onClick={this.props.onClick}
                className={`z1-btn-normal${this.props.type === 'secondary' ? ' z1-btn-secondary' : ' z1-btn-std'}`}>
                { this.props.children }
            </button>
        )
    }
}
