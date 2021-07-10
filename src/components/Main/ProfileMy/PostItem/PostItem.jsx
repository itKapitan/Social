import React from 'react'
import s from './PostItem.module.css'


export default function PostItem({posts}) {

    return posts.map(({id,avatar,name,date,text}) => {
            return (
                <div className={s.postItem} key={id} id={id}>
                    <div className={s.postItem__header}>
                        <div className={s.postItem__avatar}>
                            <img className={s.postItem__img} src={avatar} alt=""/>
                        </div>
                        <div className={s.postItem__info}>
                            <div className={s.postItem__name}>{name}</div>
                            <div className={s.postItem__date}>{date}</div>
                        </div>
                    </div>
                    <div className={s.postItem__message}>
                        {text}
                    </div>
                    <div className={s.postItem__interaction}>
                        <span>like {Math.floor(Math.random() * 100) + 1}</span>
                    </div>
                </div>
            )
        }
    );


}

