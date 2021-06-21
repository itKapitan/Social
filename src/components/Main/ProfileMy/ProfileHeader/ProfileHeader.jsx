import React from 'react'
import s from './ProfileHeader.module.css'


export default function PostItem() {

    return (
        <div className={`${s.ProfileHeader} df fdc`}>
            <div className={`${s.ProfileHeader__avatar} df`}>
                <img src="https://img.qsb.su/8wiyhzwdhz.jpg" alt=""/>
            </div>
        </div>
    )

}

