import React from 'react' //eslint-disable-line
import { translate } from 'react-i18next'
import Moment from 'moment'
import {observer} from 'mobx-react'
import SideContainer from './sideContainer'

@observer
class gameDisplayContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        let {store, t} = this.props
        return (
            <div className={'main-wrapper'}>
                <SideContainer store={store}/>
                <div className={'display-wrapper'}>
                  <div>
                      LOLO
                  </div>
                  <div>
                      <button onClick={() => { this.handleClick('start') }}>start</button>
                      <button onClick={() => { this.handleClick('stop') }}>stop</button>
                  </div>
                </div>
            </div>
        )
    }
    handleClick = (what) => {
        if(what === 'start') {
            this.props.store.start()
        } else {
            this.props.store.stahp()
        }
    }
}

export default translate()(gameDisplayContainer)
