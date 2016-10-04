import React from 'react'
import Modal from './Modal'
import {observer} from 'mobx-react'
import Button from './Button'
import {translate} from 'react-i18next'

@translate()
@observer
export default class ConfirmPopup extends React.Component {
    render () {
        let {store, t} = this.props
        return (store.popupPromise !== null) ? (
            <Modal close={store.rejectPopupPromise}
                size="small"
                header={store.popupPromise.header || t('tables.confirm')}
                footer={[
                    <Button key={0} onClick={store.rejectPopupPromise} type='secondary'>{t('tables.cancel')}</Button>,
                    <Button key={1} onClick={store.resolvePopupPromise}>{t('tables.confirm')}</Button>
                ]}>
                <p>{store.popupPromise.content}</p>
            </Modal>
        ) : null
    }
}
