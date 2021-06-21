import React from 'react';
import s from "./News.module.scss";
import NewsNav from "./NewsNav/NewsNav";
import NewsContent from "./NewsContent/NewsContent";


export default function News(props) {

    return (
        <div className={s.wr}>
            <NewsContent store={props.store} />
            <NewsNav/>
        </div>
    );
}





