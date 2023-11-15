import React, { useState } from 'react'

import {useDispatch,useSelector} from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  const[range,setRange]= useState("")
  console.log(range);
    //hook to dispatch a function in action
   const  dispatch = useDispatch()
   //component can access the state by using useSelector Hook
   const count = useSelector((state)=>state.counter.value)
   
  return (
    <div >
<div style={{height:'160px',display:'flex',justifyContent:'center',alignItems:'center'}}>
<h1 style={{fontSize:'50px'}}>{count}</h1>
</div>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',}}>

<button onClick={()=>dispatch(increment(Number(range)))} className='btn' style={{backgroundColor:'green',padding:'10px',margin:'10px'}}>Increment</button>
    <button onClick={()=>dispatch(decrement(Number(range)))}  className='btn' style={{backgroundColor:'orange',margin:'10px',padding:'10px'}}>Decrement</button>
<button onClick={()=>dispatch(reset(Number(range)))} className='btn'style={{backgroundColor:'red',padding:'10px',margin:'10px'}}>Reset</button>


</div>
<input onChange={(e)=>setRange(e.target.value)} className='form-control w-100 mt-3' placeholder='enter the range' type='text' style={{borderColor:'blue'}}/>

    </div>
  )
}

export default Counter