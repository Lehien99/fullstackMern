import classNames from "classnames/bind";
import React from 'react'
import styles from './DefaultLayout.module.scss'
import Header from '../../../organisms/Header'
import SideBar from '../../../organisms/sideBar'



interface IDefaultLayoutProps {
    children: React.ReactNode
}
const cx = classNames.bind(styles)
const DefaultLayout: React.FC<IDefaultLayoutProps> = (props:IDefaultLayoutProps) => {

    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <SideBar/>
                <div className={cx('content')}> {props.children}</div>
            </div>

        </div>
    )
}

export default DefaultLayout
