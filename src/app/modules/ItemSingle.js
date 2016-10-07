import React from 'react' //eslint-disable-line
import { translate } from 'react-i18next'
import Moment from 'moment'
import {observer} from 'mobx-react'

@observer
class itemSingle extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        let {store, t, item} = this.props
        return (
            <div className={'item-single'}>
                You have {item.units} {item.name} and {item.structs} {item.name} structures
                <div>
                    <button onClick={() => { this.addStruct(item.name, 1) }}>Add 1 structure to {item.name}</button>
                </div>
            </div>
        )
    }
    addStruct = (what, howMuch) => {
        this.props.store.addStructures(what, howMuch)
    }
}

export default translate()(itemSingle)
