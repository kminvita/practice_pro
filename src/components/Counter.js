import React, { useState } from "react";
import './counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);
    const onClickPlus = () => {
        setCounter((prev) => prev + 1);
    };

    const onClickMinus = () => {
        setCounter((prev) => prev - 1);
    };

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