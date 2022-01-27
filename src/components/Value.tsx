import React, {ChangeEvent} from "react";
import s from '../App.module.css'

type ValuePropsType = {
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setDisabled: (disabled: boolean) => void
    setDisabledSet: (disabledSet: boolean) => void
    setOnScreen: (onScreen: string) => void
    setSvvitch: (svvitch: number) => void
    setError0: (error0: boolean) => void
    error0: boolean
    errorMaxStart: boolean
    setErrorMaxStart: (errorMaxStart : boolean) => void
}


export function Value(props: ValuePropsType) {
    const onChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+event.currentTarget.value);
        if (+event.currentTarget.value < 0) {
            props.setError0(true)

        } else {
            props.setError0(false)

        }
    }

    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+event.currentTarget.value)
    }

    const pop = props.maxValue <= props.startValue ? props.setErrorMaxStart(true) : props.setErrorMaxStart(false)
    // props.maxValue <= props.startValue ? props.setErrorMaxStart(true) : props.setErrorMaxStart(false)



    // return (
    //     <div className={s.value}>
    //         <div className={s.maxValue}>
    //             <div>
    //                 max Value:
    //             </div>
    //             <div>
    //                 <input className={s.input} type="number" value={props.maxValue} onChange={onChangeMax}/>
    //             </div>
    //         </div>
    //         <div className={s.startValue}>
    //             start Value:
    //             <input className={s.input} type="number" value={props.startValue} onChange={onChangeStart}/>
    //         </div>
    //     </div>
    // )

    const onClickHandlerValue = () => {
        props.setDisabled(true);
        props.setDisabledSet(false);
        props.setOnScreen("enter values and press 'set'");
        props.setSvvitch(1)
    }

    return (

        <div className={s.value}>
            <div className={s.inputTextValue}>
                <div>
                    max value:
                </div>
                <div>
                    start value:
                </div>
            </div>
            <div className={s.inputValue}>
                <div>
                    <input
                        className={props.errorMaxStart ? s.error2 : s.input}
                        type="number"
                        value={props.maxValue}
                        onChange={onChangeMax}
                        onClick={onClickHandlerValue}
                    />
                </div>
                <div>
                    <input
                        className={ props.errorMaxStart ? s.error2 : props.error0 ? s.inputError : s.input}
                        type="number"
                        value={props.startValue}
                        onChange={onChangeStart}
                        onClick={onClickHandlerValue}
                    />
                </div>
            </div>
        </div>
    )
}