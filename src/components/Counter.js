import React, { useEffect } from "react";
import './counter.css';

function Counter({ counter, setCounter }) {
    const onClickPlus = () => {
        setCounter((prev) => prev + 1);
    };

    const onClickMinus = () => {
        setCounter((prev) => prev - 1);
    };

    useEffect(() => {
        console.log("counter;;", counter)
    }, [counter]);

    return (
        <main>
            <button 
                type="button"
                onClick={onClickPlus}
            >
                +
            </button>
            <strong>{counter}</strong>
            <button 
                type="button"
                onClick={onClickMinus}
            >
                -
            </button>
        </main>
    )
};

export default Counter;