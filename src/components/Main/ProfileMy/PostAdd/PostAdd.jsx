import React from 'react'
import s from './PostAdd.module.css'
import Button from "../../../../elements/buttons/Button";


export default function PostAdd({value, newPostText, addPost}) {

    let onChangePostTextarea = (e) => {
        let text = e.target.value
        newPostText(text)
    }
    let onClickPostAdd = () => {
        addPost();
    }

    return (
        <div className={s.postAdd}>
            <textarea
                onChange={onChangePostTextarea}
                placeholder={'Что у вас нового...'}
                value={value}
                className={s.postAdd__textarea}
            />
            <Button onClick={onClickPostAdd} Style={'default'}>
                Опубликовать
            </Button>
        </div>
    )

}
