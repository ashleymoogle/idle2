import {observable, action, computed, reaction} from 'mobx'
import {Promise} from 'es6-promise'
import _ from 'lodash'
import i18n from '../i18n'
import Moment from 'moment'
import toastr from 'toastr'

import axios from 'axios'

export default class Store {

    @observable state = {
      hasInterval : false
    }

    reactions = {}

    @observable stats = {
        energy:0
    }

    @observable items = [
        {
            name:"humans",
            units: 96,
            structs: 16
        },
        {
            name:"dwarfs",
            units: 10,
            structs: 3
        },
        {
          name: "Tommyknockers",
          units: 22,
          structs: 2
        }
    ]

    addRace = (race) => {
        this.items.push({
            name:race,
            units: 0,
            structs: 0
        })
    }

    addStructures = (who, howMuch)=> {
        let race = this.items.find((race) => race.name === who)
        race.structs += howMuch
    }

    @computed get something () {
        //return
    }

    interval = null

    start = () => {
        if (!this.state.hasInterval){
          this.state.hasInterval = true
          this.interval = setInterval(() => {
              for (this.item of this.items) {
                  this.item.units ++
                  this.stats.energy += Math.floor(this.item.structs/10)
              }
          },5000)
        }
    }

    stahp = () => {
      this.state.hasInterval = false
      clearInterval(this.interval)
    }

    init = () => {
        // Add a response interceptor
        axios.interceptors.response.use(undefined, (error) => {
            toastr.error(i18n.t('tables.toast_error'))
            return Promise.reject(error)
        })
        //this.start()
        return Promise.resolve()
    }

    startInterval = () => {
        // store intervalId in the state so it can be accessed later:
        this.state.intervalId = setInterval(this.timer, 1000)
        this.state.currentCount = 100
    }

    stopInterval = () => {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId)
        this.state.intervalId = null
    }

    confirmPopup = (content, header) => {
        return new Promise((resolve, reject) => {
            this.popupPromise = {resolve, reject, content, header}
        })
    }

    rejectPopupPromise = () => {
        this.popupPromise.reject()
        this.popupPromise = null
    }

    resolvePopupPromise = () => {
        this.popupPromise.resolve()
        this.popupPromise = null
    }
}
