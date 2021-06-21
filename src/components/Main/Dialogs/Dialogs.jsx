import React from 'react';
import {Route} from "react-router-dom";
import DialogItemsContainer from "./DialogsList/DialogItemContainer";
import DialogPageContainer from "./DialogPage/DialogPageContainer";
import s from "./Dialogs.module.css";



export default function Dialogs(props) {
    return (
        <div className={s.wr}>
            <Route path='/dialogs' exact render={() =>
                <DialogItemsContainer/>
            }/>
            <Route path='/dialog/:id' exact render={() =>
                <DialogPageContainer/>
            }/>
        </div>
    );

}


