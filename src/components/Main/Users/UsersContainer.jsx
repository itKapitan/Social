import {connect} from "react-redux";
import UsersC from "./UsersС";
import {follow, setUsers, unFollow} from "../../../redux/UsersPageReducer";

let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (id) => {
            dispatch(follow(id))
        },
        unFollow: (id) => {
            dispatch(unFollow(id))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        }

    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)
export default UsersContainer