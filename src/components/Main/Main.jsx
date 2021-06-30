import React from 'react'
import {Route} from "react-router-dom"

import s from './Main.module.css'

import ProfileMy from './ProfileMy/ProfileMy'
import Dialogs from './Dialogs/Dialogs'
import News from "./News/News"
import SettingsMy from "./SettingsMy/SettingsMy"
import UsersContainer from "./Users/UsersContainer";


export default function Main(props) {

    return (
        <main className={s.main}>
            <Route path='/profile' exact render={() =>
                <ProfileMy/>
            }/>
            <Dialogs/>
            <Route path='/feed' exact render={() =>
                <News/>
            }/>
            <Route path='/settings' exact render={() =>
                <SettingsMy/>
            }/>
            <Route path='/users' exact>
                <UsersContainer/>
            </Route>
        </main>
    )
}


