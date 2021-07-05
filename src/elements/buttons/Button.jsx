import React from 'react'
import s from './Button.module.scss'

const Button = ({Style,onClick,Text,mstyle,children}) => {



    return (
        <button
            onClick={onClick}
            className={`${s[Style]}  ${s.button} ${mstyle}`}
        >
            {Text}
            {children}
        </button>
    )
}

export default Button

