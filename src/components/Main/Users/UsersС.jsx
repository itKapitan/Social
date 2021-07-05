import React from 'react'
import s from "./style.module.scss"
import Button from "../../../elements/buttons/Button";
import * as axios from "axios";

import noAvatar from "../../../assets/images/noavatar.png";


class UsersC extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <>

            <div className={s.paginationWr}>
                {pages.map(p => {
                    return (
                        <Button
                            onClick={() => {this.onPageChanged(p)} }
                            Style={this.props.currenPage === p ? 'default' : 'light'}
                            mstyle={s.pagination}
                        >
                            {p}
                        </Button>
                    )
                })}

            </div>
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

        </>

    }

}

export default UsersC;