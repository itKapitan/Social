import {connect} from "react-redux";
import UsersC from "./UsersС";
import {follow, setCurrentPage, setUsers, unFollow} from "../../../redux/UsersPageReducer";

let mapStateToProps = (state) => {
    return{
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currenPage: state.UsersPage.currenPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber))
        }

    }
}


const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersC)
export default UsersContainer