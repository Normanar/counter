import React, {useEffect, useState} from 'react';
import {Display} from "./components/Display";
import {Settings} from "./components/Settings";
import s from './App.module.css'


function App() {



    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [count, setCount] = useState(0)
    let [disabled, setDisabled] = useState(false)
    let [disabledSet, setDisabledSet] = useState(true)
    let [svvitch, setSvvitch] = useState(0)
    let [error0, setError0] = useState(false) // отслеживание установление стартового значения ниже нуля
    let [errorMaxStart, setErrorMaxStart] = useState(false)


    let [onScreen, setOnScreen] = useState('')


    useEffect(() => {
        let countAsString = localStorage.getItem('countValue')
        if (countAsString) {
            let newCount = JSON.parse(countAsString)
            setCount(newCount)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

    useEffect(() => {
        let startAsString = localStorage.getItem('startValue')
        if (startAsString) {
            let newCount1 = JSON.parse(startAsString)
            setStartValue(newCount1)
            setCount(newCount1)
        }
    }, [])


    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    // }, [startValue])

    useEffect(() => {
        let maxAsString = localStorage.getItem('maxValue')
        if (maxAsString) {
            let newCount2 = JSON.parse(maxAsString)
            setMaxValue(newCount2)

        }
    }, [])

    let countAsString = count.toString()

    useEffect( () => {
        setOnScreen(countAsString)
    }, [count])





    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }, [maxValue])


    return (
        <div className={s.App}>
            <div className={s.displayMain}>
                <Settings
                    startValue={startValue}
                    setStartValue={setStartValue}
                    setCount={setCount}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    setDisabled={setDisabled}
                    setDisabledSet={setDisabledSet}
                    disabledSet={disabledSet}
                    setOnScreen={setOnScreen}
                    count={count}
                    setSvvitch={setSvvitch}
                    setError0={setError0}
                    error0={error0}
                    errorMaxStart={errorMaxStart}
                    setErrorMaxStart={setErrorMaxStart}
                />
                <Display count={count}
                         setCount={setCount}
                         maxValue={maxValue}
                         startValue={startValue}
                         disabled={disabled}
                         setOnScreen={setOnScreen}
                         onScreen={onScreen}
                         svvitch={svvitch}  // для переключения отображения на дисплее с показания на set
                         error0={error0}
                         errorMaxStart={errorMaxStart}


                />
            </div>
        </div>
    );
}

export default App;
