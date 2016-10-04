import {observable} from 'mobx'
import Moment from 'moment'

let nextId = 1

export default class Race {
    _id
    id
    @observable name = 'Race' + this.id

    constructor (
        id,
        name,
    ) {
        this._id = nextId++ // local id for React
        this.id = id
        this.name = name
        this.getMoment = () => {
            return Moment(this.day + ' ' + this.time, 'YYYY-MM-DD HH:mm')
        }
    }
}
