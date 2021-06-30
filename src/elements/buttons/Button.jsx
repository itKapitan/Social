import React from 'react'
import s from './Button.module.scss'

const Button = ({Style,onClick,Text,mstyle}) => {



    return (
        <button
            onClick={onClick}
            className={`${s[Style]}  ${s.button} ${mstyle}`}
        >
            {Text}
        </button>
    )
}

export default Button

