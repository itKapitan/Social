import React from "react";
import {connect} from "react-redux";
import ProfileMy from "./ProfileMy";
import {newPostText, addPost} from "../../../redux/ProfilePageMyReducer";


class ProfileAPI extends React.Component {
    render() {
        return (
            <ProfileMy value={this.props.value}
                       posts={this.props.posts}
                       newPostText={this.props.newPostText}
                       addPost={this.props.addPost}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        value: state.ProfilePageMy.newPostText,
        posts: state.ProfilePageMy.posts
    }
}

export default connect(mapStateToProps, {
    newPostText,
    addPost,
})(ProfileAPI)



