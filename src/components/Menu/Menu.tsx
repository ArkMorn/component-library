import React, { useState, createContext } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (index: number) => void

interface MenuProps {
    className?: string;
    style?: React.CSSProperties;
    mode?: MenuMode;
    defaultIndex?: number;
    onSelect?: SelectCallback
}
interface IMenuContext {
    index: number;
    onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
    const {
        children,
        className,
        style,
        mode,
        defaultIndex,
        onSelect
    } = props
    const [currentIndex, setCurrentIndex] = useState(defaultIndex)
    const handleCilck = (index: number) => {
        setCurrentIndex(index)
        if (onSelect) {
            onSelect(index)
        }
    }

    const passedContext: IMenuContext = {
        index: currentIndex ? currentIndex : 0,
        onSelect: handleCilck
    }

    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal':mode!=='horizontal'
    })
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: "horizontal"
}
export default Menu