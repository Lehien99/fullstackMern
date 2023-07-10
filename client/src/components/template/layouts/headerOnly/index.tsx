import React from 'react'
import styles from './HeaderOnly.module.scss'
import classNames from 'classnames/bind'
import Header from '../../../organisms/Header'

interface IHeaderOnlyProp {
    children: React.ReactNode
}

const cx = classNames.bind(styles)
const HeaderOnly: React.FC<IHeaderOnlyProp> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

export default HeaderOnly
