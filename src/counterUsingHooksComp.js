import React, { useEffect, useState } from 'react';

function CounterUsingHooksComp(){
    const [count, setCount] = useState(0); // 0 is initial value, useState returns array and we are using destructuring here

    // It gets called on initial render as well as after every update/render. Similar to componentDidMount, componentDidUpdate & componentWillUnmount combined.
    // Unlike componentDidMount & componentDidUpdate, effects scheduled with useEffect don't block the browser from updating the screen. To achieve blocking use - useLayoutEffect.
    useEffect(() => {
        if(count !== 0)
            document.title = `You clicked ${count} times`;
    });

    return(
        <div>
            <p>You clicked {count} times!!</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default CounterUsingHooksComp;