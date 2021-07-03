import React from 'react'
import s from "./style.module.css"
import Button from "../../../elements/buttons/Button";

export default function Users({users,unFollow,follow}) {
    let usersList =  users.map(({id,avatar,name,followed}) => {
        return (
            <>
                <div className={s.wr} key={id}>
                    <div className={s.avatar}>
                        <img
                            src={avatar}
                            alt={name}/>
                    </div>
                    <div className={s.info}>
                        <div className={s.name}>
                            {name}
                        </div>
                        <div className={s.buttons}>
                            <Button Text={'Написать сообщение'} Style={'default'}/>
                            {followed ?
                                <Button onClick={ ()=>{unFollow(id)} } Text={'Удалить из друзей'} Style={'default'} mstyle={s.btn}/>
                                :
                                <Button onClick={ ()=>{follow(id)} } Text={'Добавить в друзья'} Style={'default'} mstyle={s.btn}/>
                            }
                        </div>
                    </div>

                </div>
            </>
        );
    });
    return(
        <>
            {usersList}
            <Button Text={'Показать ещё'} Style={'default'}/>
        </>
    )



}