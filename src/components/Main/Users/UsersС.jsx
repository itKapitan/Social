import React from 'react'
import s from "./style.module.scss"
import Button from "../../../elements/buttons/Button";
import * as axios from "axios";

import noAvatar from "../../../assets/images/noavatar.png";


class UsersC extends React.Component {



    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        return <>

            {
                this.props.users.map(u =>

                    <div className={s.wr} key={u.id}>
                        <div className={s.avatar}>
                            {u.photos.small ?
                                <img src={u.photos.small} alt={u.name}/> :
                                <img src={noAvatar} alt={u.name}/>
                            }
                        </div>
                        <div className={s.info}>
                            <div className={s.name}>
                                {u.name}
                            </div>
                            <div className={s.buttons}>
                                <Button Text={'Написать сообщение'} Style={'default'}/>
                                {u.followed ?
                                    <Button onClick={() => {
                                        this.props.unFollow(u.id)
                                    }} Text={'Удалить из друзей'} Style={'default'} mstyle={s.btn}/>
                                    :
                                    <Button onClick={() => {
                                        this.props.follow(u.id)
                                    }} Text={'Добавить в друзья'} Style={'default'} mstyle={s.btn}/>
                                }
                            </div>
                        </div>

                    </div>
                )
            }
            <Button Text={'Показать ещё'} Style={'default'}/>
        </>

    }

}

export default UsersC;