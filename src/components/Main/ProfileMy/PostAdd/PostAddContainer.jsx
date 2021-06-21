import React from 'react'
import PostAdd from "./PostAdd";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/ProfilePageMyReducer";



export default function PostAddContainer(props) {

    let onChangePostTextarea = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    let onClickPostAdd = () => {
        props.store.dispatch(addPostActionCreator())
    }


    return (
        <PostAdd
            newPostText={onChangePostTextarea}
            addPost={onClickPostAdd}
            value={props.store.getState().ProfilePageMy.newPostText}
        />
    )

}
