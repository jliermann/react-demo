import React, {useState} from "react";


function Counter() {

    const [counter, SetCounter] = useState(0);

    return(
        <div className="counter-frame">
            <div>{counter}</div>
            <div>
                <button
                    onClick={() => SetCounter(counter+1)}
                >
                    Increase
                </button>
                <button
                    onClick={() => SetCounter(counter-1)}

                >
                    Decrease
                </button>
                <button
                    onClick={() => SetCounter(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter;