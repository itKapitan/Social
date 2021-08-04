import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, unFollow} from "../../../redux/UsersPageReducer";
import * as axios from "axios";
import Items from "./Items";

class ItemsAPI extends React.Component {

    componentDidMount() {
        // axios.post('https://polaris-shop.com.ua/api/get_product/30')
        //     .then(function(response) {
        //         console.log(response.data);
        //     });
        // }

        axios.post(`https://cors-anywhere.herokuapp.com/https://polaris-shop.com.ua/api/get_product/30`, {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => console.log(response.data.id)

            )}


    render() {
        return <Items totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currenPage={this.props.currenPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}
        />
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currenPage: state.UsersPage.currenPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
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

const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsAPI)
export default ItemsContainer