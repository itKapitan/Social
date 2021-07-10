const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initState = {
    users: [
        // {
        //     id: 5,
        //     avatar: "https://i.postimg.cc/Gtjcr0HN/ZHr-jo96-Pao.jpg",
        //     name: "Юлия Яковенко",
        //     followed: true,
        // }, {
        //     id: 1,
        //     avatar: "https://i.postimg.cc/d1rsHZvJ/F-22vf-ZMM7-U.jpg",
        //     name: "Кир Нов",
        //     followed: true,
        // }, {
        //     id: 2,
        //     avatar: "https://i.postimg.cc/W4Qpw6B9/H0p-YJB36-Ze0.jpg",
        //     name: "Евгений Осипенко",
        //     followed: false,
        // }, {
        //     id: 3,
        //     avatar: "https://i.postimg.cc/NFtgWGfm/j-Lp-Ny-W4-Vv-Nc.jpg",
        //     name: "Антон Хитров",
        //     followed: false,
        // }, {
        //     id: 4,
        //     avatar: "https://i.postimg.cc/mrc2965z/KM6hebjk-MKA.jpg",
        //     name: "Анастаси Шайтан",
        //     followed: false,
        // },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currenPage: 1,
    isFetching: false,
};


export default function UsersPageReducer(state = initState, action) {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currenPage: action.currenPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }


}


export const follow = (id) => ({type: FOLLOW, id})
export const unFollow = (id) => ({type: UNFOLLOW, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currenPage) => ({type: SET_CURRENT_PAGE, currenPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
