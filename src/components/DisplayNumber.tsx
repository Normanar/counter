import React from "react";
import s from '../App.module.css'


type DisplayNumberPropsType = {
    count: number
    maxValue: number
    setOnScreen: (onScreen: string) => void
    onScreen: string
    svvitch: number
    error0: boolean
    errorMaxStart: boolean
}

export function DisplayNumber(props: DisplayNumberPropsType) {
    const CssDisplayNumber = props.count < props.maxValue ? s.displayInn : s.displayInnLimit
    // const countAsString = props.count.toString()
    // props.setOnScreen(countAsString)

    if (props.errorMaxStart) {
        return <div className={s.error0}>
            Incorrect value!
        </div>
    } else if (props.error0) {
        return <div className={s.error0}>
            Incorrect value!
        </div>
    } else if (props.svvitch === 0) {
        return <div className={CssDisplayNumber}>
            {props.count}
            {/*{props.onScreen}*/}
        </div>
    } else {
        return <div className={s.setValue}>
            {props.onScreen}
        </div>
    }


}