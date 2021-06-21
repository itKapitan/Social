import {combineReducers, createStore} from "redux";

import DialogsPageReducer from "./DialogsPageReducer";
import FeedPageReducer from "./FeedPageReducer";
import ProfilePageMyReducer from "./ProfilePageMyReducer";
import ProfilePageOtherReducer from "./ProfilePageOtherReducer";
import SettingsPageReducer from "./SettingsPageReducer";

let reducers = combineReducers({
    DialogsPage: DialogsPageReducer,
    FeedPage: FeedPageReducer,
    ProfilePageMy: ProfilePageMyReducer,
    ProfilePageOther: ProfilePageOtherReducer,
    SettingsPage: SettingsPageReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;