import {useState} from "react";
function Time(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                Click Plz
            </button>
        </div>
    );
}
export default Time;