import React from "react";
import s from '../App.module.css'
import {Button} from "./Button";

type setPropsType = {
    startValue: number
    setCount: (count: number) => void
    maxValue: number
    setDisabled: (disabled: boolean) => void
    disabledSet: boolean
    setDisabledSet: (disabledSet: boolean) => void
    setOnScreen: (onScreen: string) => void
    count: number
    setSvvitch: (svvitch: number) => void
    error0: boolean
    errorMaxStart: boolean
}

export function Set(props: setPropsType) {



    const onClickHandler = () => {
        props.setCount(props.startValue);
        localStorage.setItem('startValue', JSON.stringify(props.startValue));
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue));
        props.setDisabled(false);
        props.setDisabledSet(true);
        props.setSvvitch(0);
    }

    return (
        <div className={s.set}>
            {/*<button*/}
            {/*    onClick={onClickHandler}*/}
            {/*>set*/}
            {/*</button>*/}
            <Button title={'set'} onClick={onClickHandler} disabled={props.disabledSet || props.error0 || props.errorMaxStart}/>
        </div>
    )
}