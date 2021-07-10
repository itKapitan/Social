import React from 'react';
import {connect} from "react-redux";
import DialogPage from "./DialogPage";
import {updateTextareaText, addMessage} from "../../../../redux/DialogsPageReducer";



let mapStateToProps = (state) => {
    return{
        messages: state.DialogsPage.dialogMessages,
        value: state.DialogsPage.dialogNewMessageBody,
    }
}


export default connect(mapStateToProps, {
    updateTextareaText,
    addMessage,
})(DialogPage)

