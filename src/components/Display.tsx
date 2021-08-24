import React from 'react';
import {DisplayNumber} from "./DisplayNumber";
import s from '../App.module.css'
import {Button} from "./Button";

type DisplayPropsType = {
    count: number
    setCount: (count: number) => void
    maxValue: number
    startValue: number
    disabled: boolean
    setOnScreen: (onScreen: string) => void
    onScreen: string
    svvitch: number
    error0: boolean
    errorMaxStart: boolean

}


export function Display(props: DisplayPropsType) {
    const onClickInc = () => props.setCount(props.count + 1)
    const incButtonLimit = props.maxValue <= props.count
    const incButtonDisabled = props.disabled


    const onClickReset = () => props.setCount(props.startValue)

    return (
        <div className={s.display}>
            <div className={s.displayNumber}>
                <DisplayNumber
                    count={props.count}
                    maxValue={props.maxValue}
                    setOnScreen={props.setOnScreen}
                    onScreen={props.onScreen}
                    svvitch={props.svvitch}
                    error0={props.error0}
                    errorMaxStart={props.errorMaxStart}
                />
            </div>
            <div className={s.button}>
                {/*<button className={s.buttonItemOn}*/}
                {/*    onClick={onClickInc}*/}
                {/*    disabled={incButtonDisabled}>inc*/}
                {/*</button>*/}
                {/*<button className={s.buttonItem} onClick={() => props.setCount(props.startValue)}>reset</button>*/}
                <Button title={'inc'} onClick={onClickInc} disabled={incButtonDisabled || incButtonLimit}/>
                <Button title={'reset'} onClick={onClickReset} disabled={props.disabled}/>
            </div>
        </div>
    )
}