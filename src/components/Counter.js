import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function Counter() {
    const [count, setCount] = useState(0);

    const Reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Counter :{count}</h1>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary s ms-4">+</button>
            <button onClick={() => setCount(count - 1)} className="btn btn-primary s ms-4">-</button>
            <button onClick={Reset} className="btn btn-primary s ms-4">reset</button>
        </div>
    )
}

export default Counter;