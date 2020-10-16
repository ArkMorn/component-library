import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Danger = 'danger',
    Default = 'default',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps=BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonProps=BaseButtonProps & React.ButtonHTMLAttributes<HTMLAnchorElement>
export type ButtonProps=Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps 
    } = props
    console.log('restProps',restProps)
    const classes = classNames('btn', className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': btnType === ButtonType.Link && disabled
    })
    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >{children}</a>
        )
    } else {
        return (
            <button
                className={classes}
                {...restProps}
            >{children}</button>
        )
    }
}
Button.defaultProps={
    disabled:false,
    btnType:ButtonType.Default
}
export default Button