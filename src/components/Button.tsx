import React from "react";
import s from "../App.module.css";

type ButtonType = {
    title: string
    onClick: () => void
    disabled: boolean
}


export function Button(props: ButtonType) {
    return (
        <div>
            <button className={props.disabled ? s.buttonItemOff : s.buttonItemOn} onClick={props.onClick} disabled={props.disabled}>
                {props.title}
            </button>
        </div>
    )
}