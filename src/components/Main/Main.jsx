import React from 'react'
import {Route} from "react-router-dom"

import s from './Main.module.css'

import ProfileMy from './ProfileMy/ProfileMy'
import Dialogs from './Dialogs/Dialogs'
import News from "./News/News"
import SettingsMy from "./SettingsMy/SettingsMy"


export default function Main(props) {

    return (
        <main className={s.main}>
            <Route path='/profile' exact render={() =>
                <ProfileMy store={props.store}/>
            }/>
            <Dialogs store={props.store}/>
            <Route path='/feed' exact render={() =>
                <News store={props.store}/>
            }/>
            <Route path='/settings' exact render={() =>
                <SettingsMy/>
            }/>
        </main>
    )
}


