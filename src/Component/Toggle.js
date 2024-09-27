import React,{useRef}from 'react'
function Toggle(){
    const divRef=useRef(null);
    const toggleVisibility=()=>{
        if(divRef.current.style.display==='none'){
            divRef.current.style.display='block';

        }else{
            divRef.current.style.display='none';
        }
    };
    return(
        <div>
            <button onClick={toggleVisibility}>
                Click
            </button>
            <div ref={divRef}style={{display:'block',marginTop:'10px'}}>
                <p>Hey! How are you</p>
            </div>
        </div>
    )
}
export default Toggle;

