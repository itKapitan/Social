import React from 'react';
import {NavLink} from "react-router-dom";
import s from './DialogsItem.module.css'


export default function DialogItem(props) {

    let dialogElements = props.dialogs.map((props) => {
        return (
            <NavLink to={`/dialog/${props.id}`} className={s.item}>
                <span className={s.user}>
                    <img src={props.avatar} alt=""/>
                </span>
                <span className={s.content}>
                    <span className={s.name}>
                    {props.name}
                    </span>
                    <span className={s.message}>
                        <span className={s.ansver__avatar}>
                          <img className={s.ansver__avatarImg} src={props.avatarLastMessage} alt=""/>
                        </span>
                        <span className={s.text}>{props.text}</span>
                    </span>
                </span>
            </NavLink>
        );
    })

    return (
        <>
            {dialogElements}
        </>
    );

}

