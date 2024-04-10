import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../redux/reducers";

const Counter = () => {
    const count = useSelector((state:any) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <p className="counter_title">Counter: {count}</p>
            <button className="button" onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button className="button" onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    );
};

export default Counter;