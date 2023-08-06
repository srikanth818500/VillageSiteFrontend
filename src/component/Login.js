import React, { useState } from "react";

 function Login({name}){
    
    const[value,setvalue]=useState(0);
    const[color,setcolor]=useState('blue')
    const[boolean,setboolean]=useState('false')
    return(
        <div>

       <h1>hiiiiiiii   {name}
        </h1>
        {value} 
        
        <button onClick={()=>setvalue(value + 1)}>Click</button>
        <button onClick={()=>setcolor('red')}>color{color}</button>
        <p>hiiii{boolean ? "false" :"true"}</p>
        <button onClick={()=>setboolean(!boolean)}>crrrr</button>
        </div>
        
    )
};
export default Login;
