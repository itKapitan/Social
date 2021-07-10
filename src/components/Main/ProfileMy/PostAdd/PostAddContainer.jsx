import {connect} from "react-redux";
import PostAdd from "./PostAdd";
import {newPostText, addPost} from "../../../../redux/ProfilePageMyReducer";



let mapStateToProps = (state) => {
    return{
        value: state.ProfilePageMy.newPostText,
    }
}

export default connect(mapStateToProps, {
    newPostText,
    addPost,
})(PostAdd)



