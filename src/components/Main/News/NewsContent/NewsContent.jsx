import React from "react";
import s from './NewsContent..module.scss'





const NewsContent = (props) => {

    let state = props.store.getState().FeedPage.news;

    let feedItem = state.map((props) => {
        return (
            <div className={s.wr}>
                <div className={s.items}>
                    <div className={s.info}>
                        <div className={s.avatar}>
                            <img src={props.avatar} alt={props.name}/>
                        </div>
                        <div className={s.name}>
                            {props.name}
                        </div>
                        <div className={s.date}>
                            {props.date}
                        </div>
                    </div>
                    <div className={s.text}>
                        {props.text}
                    </div>
                    <div className={s.media}>
                        {
                            props.type === 'photo' ?
                                <img src={props.contentURL}/>
                                :
                                <iframe src={props.contentURL} frameBorder="0" allowFullScreen></iframe>
                        }
                    </div>
                    <div className={s.interaction}>
                        <div className={s.icon}>
                            <div className={s.iconLike}/>
                            {props.likesCount}
                        </div>
                        <div className={s.icon}>
                            <div className={s.iconComment}/>
                            {props.commentsCount}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={s.postWr}>
            {feedItem}
        </div>
    )

}

export default NewsContent