import React from 'react';
import {connect} from "react-redux";
import DialogItem from "./DialogItem";



let mapStateToProps = (state) => {
    return{
        dialogs: state.DialogsPage.dialogs,
    }
}

const DialogItemContainer = connect(mapStateToProps)(DialogItem)
export default DialogItemContainer