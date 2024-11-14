// src/index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LayoutGridDemo from "./app/layout-grid";
import Home from "./app/page";

function MyReactComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
           <LayoutGridDemo />
           <Home />
           neha cwiubdfiwbfiw qd whijqdbw
           directorywq
        </div>
    );
}

// Render your React component to the DOM
document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById('my-react-component');
    if (element) {
        ReactDOM.render(<MyReactComponent />, element);
    }
});
