//Focus

import React,{useRef} from 'react'

function UseRef() {
    const inputRef=useRef();
    const handleFocus=()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    };
  return (
    <div style={{padding:70,backgroundColor:'pink', margin:420}}>
        <input type="text"ref={inputRef} placeholder='Click the button to focus me'/><br/>
        <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default UseRef;



