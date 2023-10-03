import './Circularprogress.css';
import {useState,useRef,useEffect} from 'react'



function Circularprogress(){
 const [val,setval]=useState(0);
 const [intervalId, setIntervalId] = useState(null);
 const valRef=useRef(val);
 const end=100;

 useEffect(()=>{
    valRef.current=val;
 },[val]);

 const handleclick=(action)=>{
    if(action==='start'){
    //    if(intervalId!==null)
    //    return;
        const newIntervalId=setInterval(()=>{
            if(valRef.current<end)
            {
                setval(preval=>preval+1);
                console.log('set')
            }
            else{
                console.log('reset')
                setval(0);
                return
            }
                
            },100)
            setIntervalId(newIntervalId);
    }
    else{
        if (intervalId) {
            setval(val)
            clearInterval(intervalId);
            setIntervalId(0);
            return;
          }
    }
 }
    return(
        <>
        <div className='circular' style={{background:`conic-gradient(#daf2f5 ${val*3.6}deg,rgb(235 80 77) 0deg)`}}>
            <span className='value'>{val}</span>
        </div>
        <div >
        <button className='button' onClick={()=>handleclick('start')}>Start</button>
        <button  className='button'onClick={()=>handleclick('stop')}>Pause</button>
        </div>

        </>
    )
}

            
export default Circularprogress