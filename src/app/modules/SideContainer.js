import React from 'react' //eslint-disable-line
import { translate } from 'react-i18next'
import Moment from 'moment'
import {observer} from 'mobx-react'
import ItemSingle from './itemSingle'

@observer
class sideContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        let {store, t} = this.props
        return (
            <div className={'side-wrapper'}>
              <p>Energy : {store.stats.energy}</p>
              {
                  store.items.map((item, iterator) => {
                      return <ItemSingle key={`renderStringIems${iterator}`} item={item} store={store}/>
                  })
              }
            </div>
        )
    }
}

export default translate()(sideContainer)
