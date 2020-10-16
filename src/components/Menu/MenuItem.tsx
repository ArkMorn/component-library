import React,{useContext} from 'react'
import classNames from 'classnames'
import {MenuContext} from './Menu'

interface MenuItemProps{
    index:number;
    disabled?:string;
    className?:string;
    style?:React.CSSProperties;
}

const MenuItem:React.FC<MenuItemProps>=(props)=>{
    const {
        className,
        style,
        disabled,
        index,
        children
    }=props
    const context= useContext(MenuContext)

    const classes=classNames('menu-item',className,{
        'is-disabled':disabled,
        'is-active':index===context.index
    })
    const handleClick=()=>{
        if(context.onSelect && !disabled){
            context.onSelect(index)
        }
    }
    return (
        <li style={style} className={classes} onClick={handleClick}>
            {children}
        </li>
    )
}
export default MenuItem
