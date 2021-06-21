import React from 'react';
import {connect} from "react-redux";
import DialogPage from "./DialogPage";
import {addNewMessageBodyCreator, updateNewMessageBodyCreator} from "../../../../redux/DialogsPageReducer";



let mapStateToProps = (state) => {
    return{
        messages: state.DialogsPage.dialogMessages,
        value: state.DialogsPage.dialogNewMessageBody,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateTextareaText: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        addMessage: () => {
            dispatch(addNewMessageBodyCreator());
        },
    }
}

const DialogPageContainer = connect(mapStateToProps,mapDispatchToProps)(DialogPage)
export default DialogPageContainer
