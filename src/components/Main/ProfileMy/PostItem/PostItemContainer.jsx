import React from 'react'
import PostItem from "./PostItem";


export default function PostItemContainer(props) {

    return (
        <PostItem
            posts={props.store.getState().ProfilePageMy.posts}
        />
    )

}

