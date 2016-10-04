import React from 'react'

export default class Switch extends React.Component {
    render () {
        let name = this.props.name || ''
        let className = this.props.class || ''
        return (
            <div className={`z1-switch ${className}`}>
                <label htmlFor={name} className="z1-switch-label" onClick={this.props.onClick}>
                    <input id={name} className="z1-toggle z1-toggle-round" type="checkbox" readOnly checked={this.props.value}/>
                    <span className="switch-state switch-label-no">{this.props.labelLeft}</span>
                    <label htmlFor={name} className="z1-switch-btn"></label>
                    <span className="switch-state switch-label-yes">{this.props.labelRight}</span>
                </label>
            </div>
        )
    }
}
