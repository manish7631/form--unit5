 
// import {useRef, useState } from 'react';
// import { useEffect } from 'react';
 
import './App.css'
 import {Form} from "./components/form" 
 import { StudentData } from "./components/showdata"

function App() {
  // const counterRef = useRef(null)
  // const [counter, setCounter] = useState(10)

  // const divRef = useRef(null)
  
  //  useEffect(() => {
  //    counterRef.current =  setInterval (() => {
  //       setCounter((p) => p+1)
  //     }, 1000)
     
  //  }, [])

  return (
    <div className="App">
       {/* <h3 ref={divRef}>Counter:{counter}</h3>
       <button onClick={() => {
         clearInterval(counterRef.current)
       }}>pause</button>

       <button onClick={() => {
          counterRef.current =  setInterval (() => {
            setCounter((p) => p+1)
          }, 1000)
       }}>start</button>
       <button onClick={() => {
         clearInterval(counterRef.current)
         setCounter(10)
       }}>reset</button> */}
       <Form/>
       <StudentData/>
       </div>
  );
    
  
}

export default App
