import React from 'react';
import s from "./DialogPage.module.css";
import Button from "../../../../elements/buttons/Button";

export default function DialogPage(props) {


    let onChangeNewMessage = (e) => {
        let text = e.target.value;
        props.updateTextareaText(text)
    }

    let onClickSendMessage = () => {
        props.addMessage();
    }

    let messageList = props.messages.map((p) => {
        return (
            <div key={p.id} id={p.id} className={s.item}>
                <div className={s.avatar}>
                    <div className={s.img}>
                        <img className={s.imgAva} src={p.avatar} alt=""/>
                    </div>
                </div>
                <div className={s.content}>
                    <div className={s.info}>
                        <div className={s.name}>{p.name}</div>
                        <div className={s.date}>{p.time}</div>
                    </div>
                    <div className={s.message}>
                        {p.text}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {messageList}

            <div className={s.dispatch}>
                <textarea
                    onChange={onChangeNewMessage}
                    placeholder={'Напишите сообщение...'}
                    value={props.value}
                    className={s.textarea}
                />
                <Button
                    onClick={onClickSendMessage}
                    Style={'default'}
                    Text={'Отправить'}
                />
            </div>
        </div>
    );

}



