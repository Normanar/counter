import React from 'react';
import {Value} from "./Value";
import s from '../App.module.css'
import {Set} from "./Set";

type SettingsPropsType = {
    startValue: number
    setStartValue: (startValue: number) => void
    setCount: (count: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setDisabled: (disabled: boolean) => void
    setDisabledSet: (disabledSet: boolean) => void
    disabledSet: boolean
    setOnScreen: (onScreen: string) => void
    count: number
    setSvvitch: (svvitch: number) => void
    setError0: (error0: boolean) => void
    error0: boolean
    errorMaxStart: boolean
    setErrorMaxStart: (errorMaxStart : boolean) => void
}


export function Settings(props: SettingsPropsType) {
    return (
        <div className={s.settings}>
            <Value
                startValue={props.startValue}
                setStartValue={props.setStartValue}
                maxValue={props.maxValue}
                setMaxValue={props.setMaxValue}
                setDisabled={props.setDisabled}
                setDisabledSet={props.setDisabledSet}
                setOnScreen={props.setOnScreen}
                setSvvitch={props.setSvvitch}
                setError0={props.setError0}
                error0={props.error0}
                errorMaxStart={props.errorMaxStart}
                setErrorMaxStart={props.setErrorMaxStart}
            />
            <Set
                startValue={props.startValue}
                setCount={props.setCount}
                maxValue={props.maxValue}
                setDisabled={props.setDisabled}
                disabledSet={props.disabledSet}
                setDisabledSet={props.setDisabledSet}
                setOnScreen={props.setOnScreen}
                count={props.count}
                setSvvitch={props.setSvvitch}
                error0={props.error0}
                errorMaxStart={props.errorMaxStart}
            />
        </div>
    )
}