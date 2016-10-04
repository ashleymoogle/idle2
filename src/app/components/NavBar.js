import React from 'react' //eslint-disable-line
import { translate } from 'react-i18next'

export default translate()((props) => {
    return (
        <div className={'navBar'}>
            { props.children }
        </div>
    )
})
