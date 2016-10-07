import React from 'react' //eslint-disable-line
import { translate } from 'react-i18next'
import Moment from 'moment'
import {observer} from 'mobx-react'

@observer
class gameDisplayContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        let {store, t} = this.props
        return (
            <div>
                <div>
                    {
                        store.items.map((item, iterator) => {
                            return <div key={`renderStringIems${iterator}`}>
                                You have {item.units} {item.name} and {item.structs} {item.name} structures
                                <div>
                                    <button onClick={() => { this.addStruct(item.name, 1) }}>Add 1 structure to {item.name}</button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div>
                    {
                        `Energy : ${store.stats.energy}`
                    }
                </div>
                <div>
                    <button onClick={() => { this.handleClick('start') }}>start</button>
                    <button onClick={() => { this.handleClick('stop') }}>stop</button>
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
    addStruct = (what, howMuch) => {
        this.props.store.addStructures(what, howMuch)
    }
}

export default translate()(gameDisplayContainer)
