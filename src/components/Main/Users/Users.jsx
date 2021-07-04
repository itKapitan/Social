import React from 'react'
import s from "./style.module.scss"
import Button from "../../../elements/buttons/Button";
import * as axios from "axios";

import noAvatar from "../../../assets/images/noavatar.png";


export default function Users({users, unFollow, follow, setUsers}) {

    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items);
        });

    }
    let usersList = users.map(({id, photos, name, followed}) => {
        return (
            <>
                <div className={s.wr} key={id}>
                    <div className={s.avatar}>
                        { photos.small ?
                            <img src={photos.small} alt={name}/> :
                            <img src={noAvatar} alt={name}/>
                        }
                    </div>
                    <div className={s.info}>
                        <div className={s.name}>
                            {name}
                        </div>
                        <div className={s.buttons}>
                            <Button Text={'Написать сообщение'} Style={'default'}/>
                            {followed ?
                                <Button onClick={() => {
                                    unFollow(id)
                                }} Text={'Удалить из друзей'} Style={'default'} mstyle={s.btn}/>
                                :
                                <Button onClick={() => {
                                    follow(id)
                                }} Text={'Добавить в друзья'} Style={'default'} mstyle={s.btn}/>
                            }
                        </div>
                    </div>

                </div>
            </>
        );
    });
    return (
        <>
            {usersList}
            <Button Text={'Показать ещё'} Style={'default'}/>
        </>
    )


}