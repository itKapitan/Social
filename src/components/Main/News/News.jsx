import React from 'react';
import s from "./News.module.scss";
import NewsNav from "./NewsNav/NewsNav";
import NewsContentContainer from "./NewsContent/NewsContentContainer";


export default function News(props) {

    return (
        <div className={s.wr}>
            <NewsContentContainer/>
            <NewsNav/>
        </div>
    );
}





