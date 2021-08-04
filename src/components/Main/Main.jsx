import React from 'react'
import {Route} from "react-router-dom"

import s from './Main.module.css'

import ProfileMyContainer from "./ProfileMy/ProfileMyContainer";
import Dialogs from './Dialogs/Dialogs'
import News from "./News/News"
import SettingsMy from "./SettingsMy/SettingsMy"
import UsersContainer from "./Users/UsersContainer";

import ItemsContainer from "./ItemsText/ItemsContainer";



export default function Main() {

    return (
        <main className={s.main}>
            <Route path='/profile' exact>
                <ProfileMyContainer/>
            </Route>
            <Dialogs/>
            <Route path='/feed' exact>
                <News/>
            </Route>
            <Route path='/settings' exact>
                <SettingsMy/>
            </Route>
            <Route path='/users' >
                <UsersContainer/>
            </Route>


            <Route path='/items' exact>
                <ItemsContainer/>
            </Route>

        </main>
    )
}


