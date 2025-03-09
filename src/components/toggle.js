import React, { useState } from 'react';

function Toggle() {
    const [showMessage, setShowMessage] = useState(false);

    const handleToggle = () => {
        setShowMessage(!showMessage);
    }

    return (
        <div>
            {showMessage && <h1>Hello</h1>}
            <button className="btn btn-primary" onClick={handleToggle}>
                {showMessage ? 'Hide Message' : 'Show Message'}
            </button>
        </div>
    );
}

export default Toggle;