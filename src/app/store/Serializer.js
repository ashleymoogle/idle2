import {observable, computed} from 'mobx'

export default class Serializer {
    constructor (store) {
        this.store = store
    }
    @observable flag = false
    @observable currentRoom = null
    @observable savedRoom = null
    @observable statesArray = []
    @observable redoArray = []

    @computed get canUndo () {
        return this.store.statesArray.length > 0
    }

    @computed get canRedo () {
        return this.store.redoArray.length > 0
    }

    @computed get canSave () {
        return JSON.stringify(this.store.savedRoom) !== JSON.stringify(this.store.serializedRoom)
    }

    @computed get isUndoRedoDirty () {
        return this.canUndo || this.canRedo
    }
}
