import {connect} from "react-redux";
import PostAdd from "./PostAdd";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/ProfilePageMyReducer";



let mapStateToProps = (state) => {
    return{
        value: state.ProfilePageMy.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        newPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}

const PostAddContainer = connect(mapStateToProps,mapDispatchToProps)(PostAdd)
export default PostAddContainer


