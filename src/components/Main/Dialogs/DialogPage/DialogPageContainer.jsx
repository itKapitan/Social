import React from 'react';
import DialogPage from "./DialogPage";
import {addNewMessageBodyCreator, updateNewMessageBodyCreator} from "../../../../redux/DialogsPageReducer";


export default function DialogPageContainer(props) {


    let onChangeTextareaText = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }
    let onClickAddMessage = () => {
        props.store.dispatch(addNewMessageBodyCreator());
    }


    return (
        <DialogPage
            updateTextareaText={onChangeTextareaText}
            addMessage={onClickAddMessage}

            value={props.store.getState().DialogsPage.dialogNewMessageBody}
            messages={props.store.getState().DialogsPage.dialogMessages}
        />
    )

}



