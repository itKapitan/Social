import s from './NewsNav.module.scss'
import React from "react";


const NewsNav = (props) => {
    return (
        <div className={s.nav}>
            <a href="#" className={s.link}>Все вместе</a>
            <a href="#" className={s.link}>Фото</a>
            <a href="#" className={s.link}>Видео</a>
            <a href="#" className={s.link}>Реккомендуемое</a>
        </div>
    )
}

export default NewsNav