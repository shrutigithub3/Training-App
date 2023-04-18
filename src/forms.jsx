import { useEffect, useState } from "react";

function State(){
    const[date,setDate] = useState(new Date());
    const[isError, SetISError]= useState(false);
    const[fname, setFname] = useState("");
    const[FnameErrormessage,setFnameErrorMessage] = useState("");
    useEffect(()=>{
        const timeID = setInterval(()=>{tick()},100)

        return () => clearInterval(timeID);
    },[])
    useEffect(()=> {},[isError]);

    const handleclick = () =>{
        SetISError(true);
    }
    const tick = () => {
        setDate(new Date());
    }
    const fnameOnChange=(e)=>{
        setFname(e.target.value);
    }
    const formSubmit=(e) => {
        e.preventDefault();
        if(fname.length !=12){
            SetISError(true)
            setFnameErrorMessage("fname should be of 12 characters");
        }
    }
    return(
        <div>
            <form onSubmit = {formSubmit}>
                <input type = "text" value={fname} name="fname" onChange={fnameOnChange}></input>
                {isError && FnameErrormessage && <span>{FnameErrormessage}</span>}
                <input type = "submit" value="Submit" />
            </form>
            {date.toLocaleDateString()}
            <button onClick = {handleclick}>Click</button>
            {isError && <span>Hello</span>}
        </div>
    )
}
export default State;


