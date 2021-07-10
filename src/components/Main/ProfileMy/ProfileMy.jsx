import React from "react";
import PostAdd from "./PostAdd/PostAdd";
import PostItem from "./PostItem/PostItem";
import s from "./ProfileMyStyle.module.scss";


export default function ProfileMy(props) {

    return (
        <>
            <div className={`${s.ProfileHeader} df fdc`}>
                <div className={`${s.ProfileHeader__avatar} df`}>
                    <img src="https://img.qsb.su/8wiyhzwdhz.jpg" alt=""/>
                </div>
            </div>
            <PostAdd value={props.value}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
            />
            <PostItem posts={props.posts}/>
        </>
    )

}
