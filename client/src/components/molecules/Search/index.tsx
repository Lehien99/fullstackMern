import React, { useEffect, useState } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/atoms/button'
import 'tippy.js/dist/tippy.css'

import { SearchIcon } from 'components/atoms/Icons'
import { Wrapper as PopperWrapper } from 'components/organisms/Popper'
import styles from './Search.module.scss'
import AccountItem from '../AccountItem'

const cx = classNames.bind(styles)

const Search = () => {
    const IsLoading = false
    const [searchResult, setSearchResult] = React.useState<number[]>([])
    const [showResult, setShowResult] = useState(true)

    const renderSearchResult = (attrs: { 'data-placement': any; 'data-reference-hidden'?: string; 'data-escaped'?: string }) => {
        return (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>Accounts</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </PopperWrapper>
            </div>
        )
    }

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 3000)
    }, [])

    return (
        <div>
            <HeadlessTippy interactive visible={showResult && searchResult.length > 0} render={(attrs) => renderSearchResult(attrs)}>
                <div className={cx('search')}>
                    <input placeholder="Search" spellCheck={false} />

                    {IsLoading ? (
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    ) : (
                        <Button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </Button>
                    )}

                    <Button className={cx('search-btn')}>
                        <SearchIcon />
                    </Button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search
