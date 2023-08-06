 import React, { useState } from "react";
 
 export const Loginsri=()=>{
    const [count, setCount] = useState(0);
    const handler=()=>{
        setCount(count+1)
    }
    const decresecount=()=>{
        setCount(count-1)
    }
    return(
        <div>

        <h1>hibcjsc</h1>
        <p>Count: {count}</p>
        <button onClick={handler}><h1>+</h1></button>

        <button onClick={decresecount}><h1>-</h1></button>
        </div>
        
    )
}
