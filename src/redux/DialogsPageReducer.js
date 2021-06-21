const ADD_NEW_MESSAGE_BODY = 'ADD-NEW-MESSAGE-BODY'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initState = {
    dialogs: [
        {
            "id": 1,
            "name": "Evangeline",
            "avatar": "https://robohash.org/rerumvelitducimus.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/inciduntilloipsa.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 2,
            "name": "Andeee",
            "avatar": "https://robohash.org/temporacupiditateveritatis.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/esseetvelit.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 3,
            "name": "Katya",
            "avatar": "https://robohash.org/estsuntanimi.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/exercitationemquout.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 4,
            "name": "Claiborn",
            "avatar": "https://robohash.org/suscipittemporadolorem.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/illumdoloribusneque.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 5,
            "name": "Josias",
            "avatar": "https://robohash.org/quisetadipisci.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/molestiaseaconsectetur.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 6,
            "name": "Wain",
            "avatar": "https://robohash.org/velquistemporibus.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/velitillodolor.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 7,
            "name": "Dorita",
            "avatar": "https://robohash.org/officiisinciduntmolestias.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/voluptatemlaboriosammolestiae.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 8,
            "name": "Vonni",
            "avatar": "https://robohash.org/occaecatitemporibusexercitationem.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/dolorumetprovident.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 9,
            "name": "Timmi",
            "avatar": "https://robohash.org/hicquaead.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/ullametqui.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 10,
            "name": "Joline",
            "avatar": "https://robohash.org/velvelearum.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/iustorema.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 11,
            "name": "Tommy",
            "avatar": "https://robohash.org/maximesequidolorum.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/sapientevitaeenim.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 12,
            "name": "Johnette",
            "avatar": "https://robohash.org/dolorutiure.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/culpaminimaratione.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 13,
            "name": "Rebe",
            "avatar": "https://robohash.org/etenimet.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/doloreexpeditaquod.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 14,
            "name": "Maximilien",
            "avatar": "https://robohash.org/doloribusomnisveritatis.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/debitispraesentiumiusto.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 15,
            "name": "Marni",
            "avatar": "https://robohash.org/consequaturnatusmodi.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/etvoluptatemquod.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 16,
            "name": "Valaree",
            "avatar": "https://robohash.org/veldictaipsum.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/nesciuntabvero.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 17,
            "name": "Nickolaus",
            "avatar": "https://robohash.org/quisquamomnissaepe.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/utsitesse.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 18,
            "name": "Danika",
            "avatar": "https://robohash.org/officiaofficiisut.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/assumendailloblanditiis.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 19,
            "name": "Karim",
            "avatar": "https://robohash.org/etdoloresmagnam.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/optiovoluptatemolestiae.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 20,
            "name": "Ashia",
            "avatar": "https://robohash.org/nonreprehenderitvitae.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/odiodoloribusenim.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 21,
            "name": "Shirline",
            "avatar": "https://robohash.org/quaealiquammolestias.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/teneturipsaaperiam.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 22,
            "name": "Laurene",
            "avatar": "https://robohash.org/quaeratcorruptinumquam.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/itaquecumet.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 23,
            "name": "Astrix",
            "avatar": "https://robohash.org/deseruntetnemo.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/eaqueautaccusamus.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 24,
            "name": "Tadeas",
            "avatar": "https://robohash.org/corporisvoluptatemquasi.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/iustonumquamut.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 25,
            "name": "Carlene",
            "avatar": "https://robohash.org/consequaturvoluptatesporro.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/etquivoluptas.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 26,
            "name": "Ricardo",
            "avatar": "https://robohash.org/exercitationemrepudiandaeest.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/iustomagnamneque.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 27,
            "name": "Hamid",
            "avatar": "https://robohash.org/perferendisvoluptatumillo.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/dolorlaboriosamvoluptatem.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 28,
            "name": "Sonnnie",
            "avatar": "https://robohash.org/sapientedeseruntvoluptas.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/molestiaerepellendusitaque.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 29,
            "name": "Carlos",
            "avatar": "https://robohash.org/consequunturundequis.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/quivelitenim.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            "id": 30,
            "name": "Lock",
            "avatar": "https://robohash.org/doloresvoluptaslaudantium.png?size=50x50&set=set1",
            "avatarLastMessage": "https://robohash.org/utrerumet.png?size=50x50&set=set1",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ],
    dialogMessages: [
        {
            "id": 1,
            "time": "13:20",
            "name": "Кирилл",
            "avatar": "https://bit.ly/3pqXzYx",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim rerum sit. Culpa ipsam minus modi nisi porro, sunt unde!",
        }, {
            "id": 2,
            "time": "13:21",
            "name": "Кирилл",
            "avatar": "https://bit.ly/3pqXzYx",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        }, {
            "id": 3,
            "time": "13:22",
            "name": "Rodion",
            "avatar": "https://bit.ly/3z6dOPh",
            "text": "Hi",
        }, {
            "id": 4,
            "time": "13:23",
            "name": "Rodion",
            "avatar": "https://bit.ly/3z6dOPh",
            "text": "Как дела?",
        }, {
            "id": 5,
            "time": "15:00",
            "name": "Кирилл",
            "avatar": "https://bit.ly/3pqXzYx",
            "text": "Здаров, только увидел сообщение, да всё норм",
        }, {
            "id": 6,
            "time": "15:20",
            "name": "Кирилл",
            "avatar": "https://bit.ly/3pqXzYx",
            "text": "Ты как?",
        }, {
            "id": 7,
            "time": "15:21",
            "name": "Кирилл",
            "avatar": "https://bit.ly/3pqXzYx",
            "text": "Some text wlwe ww;e][cpeo",
        },
    ],
    dialogNewMessageBody: "",
};


export default function DialogsPageReducer(state = initState, action) {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                dialogNewMessageBody: action.body,
            }
        case ADD_NEW_MESSAGE_BODY:
            return {
                ...state,
                dialogNewMessageBody: '',
                dialogMessages: [
                    ...state.dialogMessages,
                    {
                        id: 6,
                        time: "13:20",
                        name: "Rodion",
                        avatar: "https://bit.ly/3z6dOPh",
                        text: state.dialogNewMessageBody,
                    }
                ]
            }
        default:
            return state;
    }

}
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}
export const addNewMessageBodyCreator = () => {
    return {
        type: ADD_NEW_MESSAGE_BODY
    }
}
