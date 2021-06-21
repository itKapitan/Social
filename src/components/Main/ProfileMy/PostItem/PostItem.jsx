import React from 'react'
import s from './PostItem.module.css'


export default function PostItem(props) {


    let PostItemsList = props.posts.map((props) => {
        return (
            <div className={s.postItem} key={props.id} id={props.id}>
                <div className={s.postItem__header}>
                    <div className={s.postItem__avatar}>
                        <img className={s.postItem__img} src={props.avatar} />
                    </div>
                    <div className={s.postItem__info}>
                        <div className={s.postItem__name}>{props.name}</div>
                        <div className={s.postItem__date}>{props.date}</div>
                    </div>
                </div>
                <div className={s.postItem__message}>
                    {props.text}
                </div>
                <div className={s.postItem__interaction}>
                    <span>like {Math.floor(Math.random() * 100) + 1}</span>
                </div>
            </div>
        )
    });

    return (
        <>
            {PostItemsList}
        </>
    )

}

