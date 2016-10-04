import {spy} from 'mobx'

spy(ev => {
    if (ev.type === 'action') { console.info(ev.name) }
})
