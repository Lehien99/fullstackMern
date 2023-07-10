import React from 'react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}  src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4996ba458f4a7713d4a56716864a1189~c5_300x300.webp?x-expires=1689073200&x-signature=KAcNB4ISUBhcUPeE1naHtVFW%2FHM%3D' alt="asnhduowng" />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>asnhduowng</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>Đang bận iu đời</span>
                </div>
        </div>
    )
}

export default AccountItem
