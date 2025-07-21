import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [timer,setTimer]=useState(0);
  const [isrunning,setIsrunning]=useState(false);
  const intervalRef=useRef(null);
  const startTimer=()=>{
    if(isrunning) return;
    setIsrunning(true);
    intervalRef.current=setInterval(()=>{
      setTimer((prev)=>prev+1);
    },1000)
  }
  const Stoptimer =()=>{
    clearInterval(intervalRef.current);
    setIsrunning(false);
  }
  const resetTimer=()=>{
    clearInterval(intervalRef.current);
    setTimer(0);
    setIsrunning(false);
  }
  useEffect(()=>{
    return ()=>clearInterval(intervalRef.current);
  },[])
  return (
    <div>
      <h1>Time : {timer} s</h1>
      <button onClick={startTimer}>start</button>
      <button onClick={Stoptimer}>Stop</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default App