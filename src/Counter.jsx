import React,{useState} from "react";




function Counter ()
{
    let [count,setCount]= useState(5)

    function addvalue(){
        if(count=== 20){
            setCount(20)
        }
        else{
            setCount(count+1)
        }

    }
    
    function removevalue(){
        if(count==0){
            setCount(0)
        }
        else{
            setCount(count-1)
        }
    }
    return (
        <>
            <h1>This is counter project</h1>
            <br></br>
            <button onClick={addvalue}>ADD Value {count}</button>
            <br></br>
            <br></br>
            <button onClick={removevalue}>REMOVE Value {count}</button>
        </>

    );   

}
export default Counter;