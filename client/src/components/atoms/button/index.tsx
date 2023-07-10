import React, { ButtonHTMLAttributes, ElementType } from 'react'
import { Link } from 'react-router-dom'
import styles from './button.module.scss'
import classNames from "classnames/bind";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    to?: string,
    href?: string,
    primary?: string,
    outline?: boolean,
    small?: boolean,
    large?: boolean,
    text?: string,
    disabled?: boolean,
    rounded?: boolean,
    children: string | React.ReactNode,
    className?: string,
    lefticon?: React.ReactNode,
    righticon?: React.ReactNode,
    onClick?: () => void,
    [key: string]: any
}
interface CompProps {
    Comps: React.RefAttributes<HTMLAnchorElement> | ElementType;
}

const cx = classNames.bind(styles)
const Button: React.FC<IButtonProps> = (props) => {
    let Comp: CompProps['Comps'] = 'button';

    const { to, href, primary, outline, small, large, text, disabled, className, rounded, lefticon, righticon, children } = props;
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to;
        Comp = Link
    }
    if (href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [String(className)]: classNames,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded
    })
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    )
}

export default Button
