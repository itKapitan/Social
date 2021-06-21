import React from 'react'
import s from './PostAdd.module.css'
import Button from "../../../../elements/buttons/Button";


export default function PostAdd(props) {

    let onChangePostTextarea = (e) => {
        let text = e.target.value
        props.newPostText(text)
    }
    let onClickPostAdd = () => {
        props.addPost();
    }


    return (
        <div className={s.postAdd}>
                <textarea
                    onChange={onChangePostTextarea}
                    placeholder={'Что у вас нового...'}
                    value={props.value}
                    className={s.postAdd__textarea}
                />

            <Button
                onClick={onClickPostAdd}
                Style={'default'}
                Text={'Опубликовать'}
            />

        </div>
    )

}
