import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Time(){

    const[count,setCount]=useState(0);
    const[isDisabled,setDisabled]=useState(false);
    const[isDisabled2,setDisabled2]=useState(false);
    const handle1=()=>{
        setDisabled(false)
        if(count>99999){
            setDisabled(true)
        }
        else{
            setCount(count+1);
        }
    }

    const showToastMessage = () => {
        setDisabled2(false)
        if(count==0){
            setDisabled2(true)
        }
        if(count<=0){
            toast.error('Cannot decrease value now  !', {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
        else{
            setCount(count - 1);
        }
       
    };


    return(
        <div>
            <p>You clicked {count} times</p>
            <button class="button1"
            disabled  = {isDisabled}
            onClick={handle1}>
                Increase
            </button>
            <button class="button2" onClick={showToastMessage}>
                Decrease
            </button>
            <ToastContainer/>
        </div>
    );
}
export default Time;