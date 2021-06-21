import React from 'react';
import {Route} from "react-router-dom";
import DialogItems from "./DialogsList/DialogItem";
import DialogPageContainer from "./DialogPage/DialogPageContainer";
import s from "./Dialogs.module.css";



export default function Dialogs(props) {
    return (
        <div className={s.wr}>
            <Route path='/dialogs' exact render={() =>
                <DialogItems store={props.store}/>
            }/>
            <Route path='/dialog/:id' exact render={() =>
                <DialogPageContainer store={props.store}/>
            }/>
        </div>
    );

}


