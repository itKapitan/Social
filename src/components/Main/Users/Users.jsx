import React from "react";
import s from "./UsersStyle.module.scss";
import Button from "../../../elements/buttons/Button";
import noAvatar from "../../../assets/images/noavatar.png";
import {Link} from "react-router-dom";
import Preloaders from "../../../elements/preloader/Preloaders";


export default function Users(
    {
        totalUsersCount,
        pageSize,
        onPageChanged,
        currenPage,
        users,
        unFollow,
        follow,
        isFetching
    }) {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <>
            {isFetching && <Preloaders/>}

            <div className={s.paginationWr}>
                {pages.map(p => {
                    return (
                        <Link to={`/users/?page=${p}`}
                              onClick={() => {
                                  onPageChanged(p)
                              }}
                              className={`${s.pagination} ${currenPage === p ? 'default' : 'light'}`}
                        >{p}</Link>
                    )
                })}

            </div>
            {users.map(u =>
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
                                    unFollow(u.id)
                                }} Style={'default'} mstyle={s.btn}>
                                    Удалить из друзей
                                </Button>
                                :
                                <Button onClick={() => {
                                    follow(u.id)
                                }} Style={'default'} mstyle={s.btn}>
                                    Добавить в друзья
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            )
            }

        </>
    )
}