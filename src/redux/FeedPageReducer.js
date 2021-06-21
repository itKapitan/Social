let initState = {
    news: [
        {
            "id": 1,
            "type": "photo",
            "avatar": "https://bit.ly/3zaaAuc",
            "name": "Artem",
            "date": "1 июня 21:20",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, inventore.",
            "contentURL": "https://bit.ly/3gj6jMn",
            "likesCount": "15",
            "commentsCount": "22",
        }, {
            "id": 2,
            "type": "photo",
            "avatar": "https://bit.ly/3pqXzYx",
            "name": "Kirill",
            "date": "4 июня 18:12",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, inventore. Some longest text",
            "contentURL": "https://bit.ly/3g8ifAg",
            "likesCount": "29",
            "commentsCount": "5",
        }, {
            "id": 3,
            "type": "video",
            "avatar": "https://bit.ly/3z6dOPh",
            "name": "Rodion",
            "date": "5 июня 19:10",
            "text": "Consectetur adipisicing elit. Illo, inventore. onsectetur adipisicing elit. onsectetur adipisicing elit. onsectetur adipisicing elit. ",
            "contentURL": "https://www.youtube.com/embed/EpymbG24R0Q",
            "likesCount": "120",
            "commentsCount": "2",
        }, {
            "id": 4,
            "type": "photo",
            "avatar": "https://bit.ly/3zaaAuc",
            "name": "Artem",
            "date": "21 июня 01:21",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, inventore.",
            "contentURL": "https://bit.ly/3w2lno9",
            "likesCount": "31",
            "commentsCount": "2",
        },
    ],
};


export default function FeedPageReducer(state = initState, action) {

    return state;

}