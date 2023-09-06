import { useState } from 'react'
import style from '@/styles/components/smartphoneApp/common/button.module.css'

export type ButtonProps = {
    disabled: boolean,
    text: string,
    mainColor: boolean,
    link: string
}

export default function Button(props: ButtonProps) {

    let baseClassName = props.disabled ? style.disabledButton : style.button;
    let additionalClassName = props.mainColor ? style.mainColor : "";

    let className = `${baseClassName} ${additionalClassName}`;

    const handleClick = () => {
        if (!props.disabled) {
            window.location.href = props.link; // 画面遷移したいURLに書き換えてください
        }
    }

    return (
        <>
            <button className={className.trim()} onClick={handleClick}>{props.text}</button>
        </>
    )
}