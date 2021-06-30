import React from 'react'
import s from './Button.module.scss'

const Button = (props) => {
    let btnStyle = s[props.Style]
    return (
        <button
            onClick={props.onClick}
            className={`${btnStyle} ${s.button}`}
        >
            {props.Text}
        </button>
    )
}

export default Button

