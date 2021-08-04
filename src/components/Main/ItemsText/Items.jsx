import s from "./ItemsStyle.module.scss";
import Button from "../../../elements/buttons/Button";
import noAvatar from "../../../assets/images/noavatar.png";
import React from "react";


export default function Items(
    {
        totalUsersCount,
        pageSize,
        users,
    }) {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <>
            {
                users.map(u =>
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

                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}