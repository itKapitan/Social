import React from 'react'
import {connect} from "react-redux";
import PostItem from "./PostItem";



let mapStateToProps = (state) => {
    return{
        posts: state.ProfilePageMy.posts
    }
}

const PostItemContainer = connect(mapStateToProps)(PostItem)
export default PostItemContainer
