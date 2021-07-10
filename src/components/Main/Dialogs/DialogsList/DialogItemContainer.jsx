import React from 'react';
import {connect} from "react-redux";
import DialogItem from "./DialogItem";



let mapStateToProps = (state) => {
    return{
        dialogs: state.DialogsPage.dialogs,
    }
}

export default connect(mapStateToProps)(DialogItem)
