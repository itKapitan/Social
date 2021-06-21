const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initState = {
    posts: [
        {
            "id": 1,
            "name": "Levey",
            "avatar": "https://robohash.org/magnamquiqui.png?size=50x50&set=set1",
            "date": "17/06/2020",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ],
    newPostText: "",
};


export default function ProfilePageMyReducer(state = initState, action) {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [
                    {
                        id: 6,
                        name: 'Rodin Fadeev',
                        avatar: 'https://img.qsb.su/8wiyhzwdhz.jpg',
                        text: state.newPostText,
                    },
                    ...state.posts,
                ]
            }
        default:
            return state;
    }


}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
