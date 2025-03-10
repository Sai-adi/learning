import React from "react";

function App() {
    function handleClick() {
        alert("Button Clicked");
    }
    return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
);
}



export default App;