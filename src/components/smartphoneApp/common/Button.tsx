import { useState } from 'react'
import style from '@/styles/components/smartphoneApp/common/button.module.css'

export type ButtonProps = {
    disabled: boolean,
    text: string,
    mainColor: boolean,
    link?: string,
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {

    let baseClassName = props.disabled ? style.disabledButton : style.button;
    let additionalClassName = props.mainColor ? style.mainColor : "";

    let className = `${baseClassName} ${additionalClassName}`;

    const handleClick = () => {
        // ボタンが無効な場合、何もしない
        if (props.disabled) {
            return;
        }

        // linkプロパティが指定されている場合、そのURLに遷移する
        if (props.link) {
            window.location.href = props.link;
            return;
        }

        // onClickプロパティが指定されている場合、その関数を呼び出す
        if (props.onClick) {
            props.onClick();
            return;
        }
    }

    return (
        <>
            <button className={className.trim()} onClick={handleClick}>{props.text}</button>
        </>
    )
}