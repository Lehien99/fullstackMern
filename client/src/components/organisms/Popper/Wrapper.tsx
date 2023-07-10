import React from 'react'
import classNames from 'classnames/bind'
import styles from './Popper.module.scss'

interface IWrapperProps {
    children: React.ReactNode
}

const cx = classNames.bind(styles);

const Wrapper: React.FC<IWrapperProps> = (props) => {
    return <div className={cx('wrapper')}>{props.children}</div>
}

export default Wrapper
