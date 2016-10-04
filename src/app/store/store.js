import {observable, action, computed, reaction} from 'mobx'
import {Promise} from 'es6-promise'
import _ from 'lodash'
import i18n from '../i18n'
import Moment from 'moment'
import toastr from 'toastr'

import axios from 'axios'

export default class Store {

    @observable state = {}

    reactions = {}

    init = (id = 287722) => {
        // Add a response interceptor
        axios.interceptors.response.use(undefined, (error) => {
            toastr.error(i18n.t('tables.toast_error'))
            return Promise.reject(error)
        })

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
