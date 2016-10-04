import React from 'react'

export default class Modal extends React.Component {
    render () {
        return (
            <div className="z1-modal-wrapper" style={{zIndex: 100}}>
                <div ref="modalBackground" className="z1-modal-background" onClick={this.handleClickWrapper}></div>
                <div className={`z1-modal${this.props.size === 'small' ? ' z1-modal-small' : ''}`}>
                    <span className="modal-close" onClick={this.props.close}>×</span>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>{this.props.header}</h3>
                        </div>
                        <div className="modal-body">
                            { this.props.children }
                        </div>
                        <div className="modal-footer">
                            {this.props.footer}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    handleClickWrapper = (e) => {
        if (e.target === this.refs.modalBackground) {
            this.props.close()
        }
    }
}
